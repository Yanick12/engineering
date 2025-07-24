// pages/blog/index.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const posts = [
  {
    title: 'L’importance de l’automatisation dans l’industrie moderne',
    slug: 'automatisation-industrie',
    excerpt: 'Découvrez comment les systèmes automatisés transforment les chaînes de production et améliorent la productivité.',
    date: '3 juillet 2025',
    image: '/images/maintenance_industriel/image24.jpg',
  },
  {
    title: 'Les défis du montage industriel au Cameroun',
    slug: 'defis-montage-cameroun',
    excerpt: 'Une analyse des contraintes techniques et logistiques auxquelles font face les industriels camerounais.',
    date: '20 juin 2025',
    image: '/images/montage/image4.jpg',
  },
  {
    title: 'Pourquoi former le personnel est un investissement stratégique ?',
    slug: 'formation-investissement',
    excerpt: 'Former ses collaborateurs, c’est renforcer la compétitivité de l’entreprise. On vous explique pourquoi.',
    date: '5 juin 2025',
    image: '/images/formation/image26.jpg',
  },
];

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Blog - Solutum Engineering</title>
      </Head>
      <Navbar />

      <section className="section has-background-light">
        <div className="container">
          <h1 className="title is-2 has-text-centered mb-6">Notre Blog</h1>
          <div className="columns is-multiline">
            {posts.map((post, index) => (
              <div className="column is-4" key={index}>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        style={{ borderRadius: '6px' }}
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-5">{post.title}</p>
                    <p className="subtitle is-6 has-text-grey">{post.date}</p>
                    <p>{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="button is-small ">
                      Lire plus
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            <section className="section has-background-light">
        <div className="container">
          
          <div className="columns is-multiline">
            {posts.map((post, index) => (
              <div className="column is-4" key={index}>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        style={{ borderRadius: '6px' }}
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-5">{post.title}</p>
                    <p className="subtitle is-6 has-text-grey">{post.date}</p>
                    <p>{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="button is-small ">
                      Lire plus
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
