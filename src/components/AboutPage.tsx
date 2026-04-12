import { motion } from "motion/react";
import { Heart, Users, History, Target, ShieldCheck } from "lucide-react";
import React from "react";

const AboutPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="pt-24 min-h-screen"
  >
    {/* Mission Section */}
    {/* mission */}
    <section className="py-24 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-container text-on-primary-fixed text-sm font-headline font-bold w-fit">
            <Target className="w-4 h-4 mr-2" /> Our Mission
          </div>
          <h2 className="font-headline text-5xl md:text-6xl font-extrabold text-on-surface leading-tight">
            A Sunlit Sanctuary for <span className="text-primary">Every Soul</span>
          </h2>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Favored Felines was born from a simple observation: cats, with their vibrant coats and spirited personalities, deserve a sanctuary that matches their warmth. Our mission is to provide a safe, sun-drenched haven where every rescued ginger kitty can heal, play, and eventually find their forever family.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-surface-container-low rounded-2xl space-y-3">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <h4 className="font-headline font-bold text-on-surface">Safe Haven</h4>
              <p className="text-sm text-on-surface-variant">Providing medical care and emotional support for every rescue.</p>
            </div>
            <div className="p-6 bg-surface-container-low rounded-2xl space-y-3">
              <Heart className="w-8 h-8 text-primary" />
              <h4 className="font-headline font-bold text-on-surface">Forever Love</h4>
              <p className="text-sm text-on-surface-variant">Matching our cats with families who truly understand their needs.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://picsum.photos/seed/cat-sanctuary/1200/800"
            alt="The Radiant Feline Sanctuary"
            className="rounded-3xl shadow-2xl object-cover w-full h-[500px] border-[12px] border-white rotate-2"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-tertiary-container p-6 rounded-2xl shadow-xl max-w-[200px] -rotate-3">
            <p className="font-headline font-black text-on-tertiary-container text-2xl">3+ Years</p>
            <p className="text-on-tertiary-container text-sm font-bold">of rescuing adorable kitties</p>
          </div>
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-4xl font-bold text-on-surface">Our Core Values</h2>
          <div className="w-24 h-1.5 bg-primary-container mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Compassion First",
              desc: "We believe every cat, regardless of their past, deserves to be treated with dignity and deep empathy.",
              icon: <Heart className="w-10 h-10 text-primary" />
            },
            {
              title: "Transparency",
              desc: "We are open about our rescue processes, medical treatments, and how every donation is spent.",
              icon: <ShieldCheck className="w-10 h-10 text-primary" />
            },
            {
              title: "Community",
              desc: "We foster a supportive network of adopters, volunteers, and donors who share our passion for felines.",
              icon: <Users className="w-10 h-10 text-primary" />
            }
          ].map((value, i) => (
            <div key={i} className="bg-surface-container-lowest p-10 rounded-3xl space-y-4 shadow-sm border border-zinc-100">
              {value.icon}
              <h3 className="font-headline text-2xl font-bold text-on-surface">{value.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* History Section */}
    <section className="py-24 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <img
            src="https://picsum.photos/seed/cat-history/1200/800"
            alt="Sanctuary History"
            className="rounded-3xl shadow-2xl object-cover w-full h-[500px] border-[12px] border-white -rotate-2"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed text-sm font-headline font-bold w-fit">
            <History className="w-4 h-4 mr-2" /> Our Journey
          </div>
          <h2 className="font-headline text-4xl font-bold text-on-surface">From a Shed to a Sanctuary</h2>
          <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
            <p>
              In 2015, Elena Sunbeam found a stray ginger kitten named Marmalade shivering in a storm. That moment sparked a realization: ginger cats have a unique spirit that deserves a specialized environment.
            </p>
            <p>
              What started as a small foster network in a backyard shed has grown into a world-class 5-acre facility. Today, we serve over 200 cats at any given time, providing them with sun-drenched lounges and expert care.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 space-y-4">
          <Users className="w-12 h-12 text-primary mx-auto" />
          <h2 className="font-headline text-4xl font-bold text-on-surface">Meet the Team</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">The humans behind the purrs. Our team is a mix of veterinary experts, behaviorists, and lifelong cat lovers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              name: "Ginger McLaughlin",
              role: "Founder & Visionary",
              bio: "Ginger's love for ginger cats started with Marmalade. She oversees the sanctuary's long-term mission and community outreach.",
              img: "https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/633493459_10235856202118648_1060069029248616375_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEhzZvSe6BE8gepD98x-bj6VuK2hMVP7P5W4raExU_s_o1dVwTiHNlc4Z_dYfD-KLt8bRhGfwQmvcKo-xQipgzk&_nc_ohc=E76XEBBPPyAQ7kNvwErfYLo&_nc_oc=AdrT3OuPVId-9A3NpWXzwoR2dUXlJs0USTvH16EXG33qVcy27c9GuAXzTFPvWo_DIsk&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=CfLuAClvB8Jf2dBAywg5og&_nc_ss=7a3a8&oh=00_Af2o8Ry9Mqqz25LFpvmhLMI8h3uOfEoa-TZE6-5hYlx04g&oe=69E0532F"
            },
            {
              name: "Precious O.",
              role: "Cat Activist",
              bio: "With 5 years of feline experience, Precious ensures every kitty is in peak physical health and receives the best care.",
              img: "https://1drv.ms/i/c/682ff269d31480d6/IQRXRX7HzfG9SoXVyAhBlASCAVDgP6l7Jtptk9h_gs7QCDQ"
            },
            {
              name: "Mia Jennifer",
              role: "Adoption Coordinator",
              bio: "Jennifer has a sixth sense for matching the right cat with the right family. She's facilitated over 100 successful adoptions.",
              img: "https://1drv.ms/i/c/682ff269d31480d6/IQSHnBFYVprSRps-fjfH_wb7Af5ihjnsxak_g3dbaiWnHJ0"
            }
          ].map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm group border border-zinc-100"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 space-y-3">
                <h4 className="font-headline font-bold text-2xl text-on-surface">{member.name}</h4>
                <p className="text-primary font-bold text-sm uppercase tracking-wider">{member.role}</p>
                <p className="text-on-surface-variant text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </motion.div>
);

export default AboutPage;
