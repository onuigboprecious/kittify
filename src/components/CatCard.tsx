import { motion } from 'motion/react';
import { useState } from 'react';
import { Heart, Info, Activity, User, Palette, Users } from 'lucide-react';
import { CatFields } from '../lib/contentful';

interface CatCardProps {
  cat: CatFields;
  onAdopt: (name: string) => void;
}

export default function CatCard({ cat, onAdopt }: CatCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-success/10 text-success border-success/20';
      case 'Pending': return 'bg-warning/10 text-warning border-warning/20';
      case 'Adopted': return 'bg-error/10 text-error border-error/20';
      default: return 'bg-zinc-100 text-zinc-600 border-zinc-200';
    }
  };

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-secondary-container/20 rounded-3xl overflow-hidden ambient-shadow border-2 border-secondary-container/30 flex flex-col h-fit group"
    >
      {/* Image Section */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={cat.image?.fields?.file?.url ? `https:${cat.image.fields.file.url}` : 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop'}
          alt={cat.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-4 py-1.5 rounded-full text-xs font-bold border backdrop-blur-md ${getStatusColor(cat.adoptionStatus)}`}>
            {cat.adoptionStatus}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight group-hover:text-secondary-fixed-variant transition-colors line-clamp-1">
              {cat.name}
            </h3>
            <p className="text-[10px] sm:text-sm font-bold text-on-surface-variant flex items-center gap-1">
              <User size={12} className="sm:w-3.5 sm:h-3.5 text-secondary-fixed-variant" />
              {cat.age} • {cat.color}
            </p>
          </div>
          <button className="p-2 sm:p-2.5 rounded-full bg-primary-container text-on-primary-container hover:scale-110 transition-all cursor-pointer shadow-md">
            <Heart size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
          <div className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-xl bg-white/40 border border-secondary-container/50">
            <Activity size={14} className="sm:w-4 sm:h-4 text-on-secondary-container" />
            <div className="text-[8px] sm:text-[10px] leading-tight font-bold text-on-secondary-container uppercase tracking-wider overflow-hidden">
              <span className="truncate block opacity-70">Health</span>
              <div className="text-[10px] sm:text-xs text-on-surface normal-case truncate font-black">{cat.healthStatus}</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-xl bg-white/40 border border-secondary-container/50">
            <Users size={14} className="sm:w-4 sm:h-4 text-on-secondary-container" />
            <div className="text-[8px] sm:text-[10px] leading-tight font-bold text-on-secondary-container uppercase tracking-wider overflow-hidden">
              <span className="truncate block opacity-70">Siblings</span>
              <div className="text-[10px] sm:text-xs text-on-surface normal-case truncate font-black">{cat.siblings}</div>
            </div>
          </div>
        </div>

        <div className="space-y-4 flex-1">
          <div>
            <div className="flex items-center gap-2 text-[9px] sm:text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-widest group-hover/story:text-secondary-fixed-variant transition-colors">
              <Palette size={12} className="sm:w-3.5 sm:h-3.5 text-secondary-fixed-variant" />
              Personality
            </div>
            <p className="text-xs sm:text-sm text-on-surface leading-relaxed line-clamp-1">
              {cat.personality}
            </p>
          </div>
          <div
            onClick={toggleExpand}
            className="cursor-pointer group/story"
          >
            <div className="flex items-center gap-2 text-[9px] sm:text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-widest group-hover/story:text-secondary-container transition-colors">
              <Info size={12} className="sm:w-3.5 sm:h-3.5" />
              Our Story
            </div>
            <motion.p
              initial={false}
              animate={{ height: isExpanded ? 'auto' : '4.5rem' }}
              className={`text-xs sm:text-sm text-on-surface-variant leading-relaxed overflow-hidden ${!isExpanded ? 'line-clamp-3' : ''}`}
            >
              {cat.storyline}
            </motion.p>
            <div className="flex justify-end mt-1">
              <span className="text-[10px] font-black text-on-secondary-container uppercase tracking-wider group-hover/story:opacity-100 transition-all underline underline-offset-4">
                {isExpanded ? 'Show Less' : 'Read More'}
              </span>
            </div>
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={(e) => {
            e.stopPropagation();
            onAdopt(cat.name);
          }}
          className="mt-6 md:mt-8 w-full py-3.5 md:py-4 rounded-xl md:rounded-2xl bg-primary-container text-on-primary-container font-black shadow-lg shadow-yellow-500/30 hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-2 text-sm md:text-base border-2 border-white/20"
        >
          <Heart size={18} fill="currentColor" />
          Adopt Me
        </motion.button>
      </div>
    </motion.div>
  );
}
