import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { client, CatEntry } from '../lib/contentful';
import CatCard from './CatCard';
import AdoptionModal from './AdoptionModal';
import { Loader2, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AdoptPage() {
    const [cats, setCats] = useState<CatEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCat, setSelectedCat] = useState<string | null>(null);
    const itemsPerPage = 3;

    const totalPages = Math.ceil(cats.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentCats = cats.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const fetchCats = async () => {
            try {
                setLoading(true);
                const response = await client.getEntries({
                    content_type: 'cat',
                    order: ['-sys.createdAt'],
                });
                setCats(response.items as unknown as CatEntry[]);
            } catch (err) {
                console.error('Error fetching cats from Contentful:', err);
                setError('Failed to load our furry friends. Please check your Contentful configuration.');
            } finally {
                setLoading(false);
            }
        };

        fetchCats();
    }, []);

    return (
    <>
        <section className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-10 md:mb-16 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-bold text-[10px] md:text-xs tracking-widest uppercase mb-4"
                    >
                        Find Your Purr-fect Match
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-black text-on-surface mb-4 md:mb-6 tracking-tight"
                    >
                        Cats Awaiting a <span className="text-primary">Forever Home</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed px-4 md:px-0"
                    >
                        Every cat has a story and a dream of finding a family. Browse through our residents and see if you find a connection.
                    </motion.p>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex flex-col items-center justify-center py-32 gap-4">
                        <Loader2 className="w-12 h-12 text-primary animate-spin" />
                        <p className="text-on-surface-variant font-bold animate-pulse">Consulting the feline registry...</p>
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <div className="max-w-xl mx-auto bg-error/5 border border-error/10 p-8 rounded-3xl text-center">
                        <div className="bg-error/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertCircle className="text-error" size={24} />
                        </div>
                        <h3 className="text-xl font-black mb-2">Something went wrong</h3>
                        <p className="text-on-surface-variant mb-6">{error}</p>
                        <div className="text-xs text-on-surface-variant/60 bg-surface-container rounded-xl p-4 text-left font-mono">
                            Tip: Ensure you have added VITE_CONTENTFUL_SPACE_ID and VITE_CONTENTFUL_ACCESS_TOKEN to your .env file and created the 'cat' content type.
                        </div>
                    </div>
                )}

                {/* Results Grid */}
                {!loading && !error && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start min-h-[400px]">
                            {currentCats.map((cat) => (
                                <CatCard 
                                    key={cat.sys.id} 
                                    cat={cat.fields} 
                                    onAdopt={(name) => setSelectedCat(name)}
                                />
                            ))}
                        </div>

                        {cats.length > itemsPerPage && (
                            <div className="mt-16 flex flex-col items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="p-3 rounded-2xl bg-white border border-secondary-container/30 text-secondary disabled:opacity-20 disabled:cursor-not-allowed hover:bg-secondary-container/10 transition-all cursor-pointer shadow-sm"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    
                                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary-container/10 rounded-2xl border border-secondary-container/20">
                                        {[...Array(totalPages)].map((_, i) => (
                                            <button
                                                key={i + 1}
                                                onClick={() => handlePageChange(i + 1)}
                                                className={`w-10 h-10 rounded-xl font-bold transition-all cursor-pointer flex items-center justify-center ${
                                                    currentPage === i + 1
                                                        ? 'bg-primary-container text-on-primary-container shadow-md scale-110'
                                                        : 'text-on-surface-variant hover:bg-white/50'
                                                }`}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="p-3 rounded-2xl bg-white border border-secondary-container/30 text-secondary disabled:opacity-20 disabled:cursor-not-allowed hover:bg-secondary-container/10 transition-all cursor-pointer shadow-sm"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest opacity-50">
                                    Page {currentPage} of {totalPages}
                                </p>
                            </div>
                        )}
                    </>
                )}
                {/* Empty State */}
                {!loading && !error && cats.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-2xl font-bold text-on-surface-variant opacity-30">
                            No cats found. Please check back later!
                        </p>
                    </div>
                )}
            </div>
        </section>

        <AdoptionModal 
            isOpen={!!selectedCat} 
            onClose={() => setSelectedCat(null)} 
            catName={selectedCat || ''} 
        />
    </>
    );
}
