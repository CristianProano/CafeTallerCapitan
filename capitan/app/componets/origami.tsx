'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
interface ImageItem {
  src: string;
  label: string;
  diagrams: string[];
}

const images: ImageItem[] = [
  {
    src: 'https://i.ytimg.com/vi/kfLqXPHUHKU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC4SqdrH3Xyc6GD5CS1EtilQdbwMw',
    label: 'Grulla',
    diagrams: [
      'https://i.pinimg.com/564x/2a/36/ea/2a36ead9d209e0bee6745308cfd502e6.jpg',
    ],
  },
  {
    src: 'https://comohacerorigami.net/wp-content/uploads/2016/01/caja-de-papel-estrella.jpg',
    label: 'Caja Estrella',
    diagrams: [
      'https://i.pinimg.com/736x/0b/21/a4/0b21a42fac5efda337c90ed026317bd6.jpg',

    ],
  },
  {
    src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDRzom6bNQMUwBGGsyQdHYWnBD_T2sd6_jCmL9WDXaykcd4xYYdEEkte_tNEACuckYfneMf5AOSej6M5LS7BoTBe7Uzd-T13Iqh_XmMdEeOz9gJl-xFrARGHjIowuG2Vp1v1oRqlh5r1O_/s1600/camera+won+park.jpg',
    label: 'Camara',
    diagrams: [
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNdO1wQXzy4fiod_JREc1oYuWFKOle-8_3cikvZStdizFlfaFwBaG2RBkLUgr5Af1awVvr28nnJ2L-61xqVu24YMVP-sMVAsOyDh5Dwca5hfvChM0OGqlUv-YSB3eaSncpPB-3myxGb1jT/s1600/c1.jpg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhASHQVYgdO3Xzu-HKzp0NfJAFwwLgAZzq6UqwLmeaM7TFph6sceL549X5-NB4vfdFHFeA3sHktPgwCCmC7HtwsT2nusz4LVqdRjud023vTDdCLnAid1mFAOV8b2VJdDFxz2hB-gvJvpH1V/s1600/c2.jpg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUrmhFeVUYJPjf2YX2h1ezaRoP7PVu12S6iAw4YVk_CvT1ERaA3mYBiw3exN4w5M8hoURRefzP4MaOxk6nvzSLAt4DEFciX4j9GXGiHgBaSIGbmVegTbz9-FAKu9CQ8ZYYB9kxGtdyWeTb/s1600/c3.jpg ',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7wF9yELT0jr_NRjAwSflWWqiV9OGo_CY9D-l-wDRetCAd-eZ2Jxf9bNQfqOmYra7-Ao6Fc4uHyg9Rb1_oU2PWBeEec5SPiyObfxjhGQKanPgPgwarrdMFgVFfvH-VpgSnoIx71HEU8yZx/s1600/c4.jpg',
    ],
  },
  {
    src: 'data:image/jpeg;base64,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',
    label: 'Corazón',
    diagrams: [
      'https://www.shutterstock.com/image-illustration/heart-origami-rectangle-paper-step-260nw-2380765895.jpg',
    ],
  },
  {
    src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEPEA8QEBASDw8PEBAQEBAPEA8PDxAPFRUWFhURExUYHSggGBolHRUVITEiJSkrLi4uFx81ODMsNygtLisBCgoKDg0OFxAQGi0lICUtLS4wLS0rLS0tLS0tLS0tLTAtLS0tLS0rLS0tLS0uLS0tLS0rNy4tLi0tLS0tKy0tLf/AABEIAKwBJQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQMCBAUGBwj/xABEEAACAQIDBAUICAUACwAAAAAAAQIDEQQSUQUhMUEGImFxoRMyYoGRscHRBxQjJEJScvCisrPh8TQ1Q0Rkc3SDk6PC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EAC4RAQACAQMDAgQEBwAAAAAAAAABAgMEETESIXEFQRMzUWEGIjLBI4GhsdHh8P/aAAwDAQACEQMRAD8A+zxitORKitF4Ex5dyMkiUIyrRewnKtF7ESCEoyrRexEqK0XsRIQCy08ELLQABZae4ZVp4IABlWnghlWnggeQ6PdKs1aphsRJXVWpClUfO02lCXboydm2PBfJW1qxvty9flWnghlWnggSQxRlWnghlWnggAGVaeCGVaeCAAZVp4IWWnuAAZVp4IZVp4IABlWnghlWnggAGVaeCFloAAstBZaAALLT3EWWnuJAEZVovYRlWi9iMgBjlWi9iGVaL2IkAY5VoiHFaIzsRYCmrHh8kDOquACGUFuXcjIiHBdxISEkEoAAAAAAAACT4jjH95xC5LEVv6kj7afDNqTaxWKVv95r9/nyL05e96DG98niP7vonRDpJny4evLr8KVSX41yjL0tHzPYHxKhPg/cfQ+iPSLyyVCrL7VLqSf+1iuX6kvaLVU9T9O6JnLjjt7x9HqQAUeIAAAAAJBAAAAAAAAAAAAAAAIBJAAAAV1eQFXkAM48F3IkiPBdyJAEkEgAAAAAAAAD4PtyVsZjOzFV/wCds+8HwXpNdY7GW4/Wq38zZpj5e/8Ah/514+37rcNVOjQqNNNNpp3TT3p6o4eGnwXPtOjSnqabPoslH1Loxt1YmGSe6vBdZcM8fzr4ndPkOBxkqc41IStODun8LaH07Ym1Y4qkpx3SW6cb74y07jG1dnyPqOh+DbrrH5Z/o6AAKvMAAAAAAAAAAAAAAAAAAAIJIAAADCryAq8gBlHgu5EkR4LuRIAAASAAAAAAACT4J0uaW0Mav+IqP1vefez4F9IUHT2pjN1s04TXanCLv7blqztL3vw/O2otH2/eGjRd/DivBHUw8+Hb+7HBoVb/AL5HSw1TT5m3L6rJV1k2t6OtsLa0sLVVRdaD3VIrnD5ricSEr8P7Isz27b+BGzjyY65KzS0dpfacNXjUhGcGpQmlKLXNMsPAdBdtOE/q1R9Sd3Tf5an5e5+89+YzGz4zV6a2nyTSf5eAAEOYAAAAxnNLe2ku12AyBqVNp0V+NP8ASm/cadfb0F5sJS7XaKLRWZ9mtcGS3FXXB5yr0jnypxXe5P5GhiOkdblKMf0wXxuT8OXRT0/Nb2eyB4zZdbF4ybSr1IUo+fUWVW9GFlvl7j2NONklduytdttvtb5srMbMc+D4NumZiZ+zIAEMAgkgAAAMKvICryAGUeC7kSRHgu5EgCSCQIAAEggASAGAPln0u9HZynHHU1mjkVOuvy5fMn3b2vUj6kcTphthYLCzqZYzlJqnGE98JOSfnLmrJ7uZMOvRZ74c1bU5fnynOz0Ojha/D93NXEu83NQgszbcUmoR7IxvuXYbdCv6FP8A8VN+9Gsdn2kaysx3h1aL9vMuk+fD2GGEr3VstP1Uqa3ew37RlxjD1LI/4bF+zL48b8NeFSzVm09zTXtVmfWOjO1liqEZt/aR6lRemlx7mt58nrUkluco/wAa+DNjZHSmWzZTqZPLwcLThCai2lvUrNXTW/2kXpvG7j9Q0sanFvT9Uf8AS+zA8f0e+kbA42caSk6NWSWWNWyUm15sZXtc7eL2uldU1f0nw9S5mNazbh8xOmyxbpmvd06tWMVeTSWrOViduRTtCOb0m7R+Zx8TiXN3lJy7+XcUNm0Yojl24tDWO9+7fq7Tqz4yy9kOr4mrOrzk7vVtt+JqyrGrVxJbtHDupp4jiG9UxCNOtiTRq4o0K2K47+wby7MendGri/X++ZtbC2TUxk7u8KEXaU+cmuMYfPkVdGthTxkvKTvHDp73vUqjX4YvTVn0ehRjTioQioxirRilZJGV77dnFrtdXDvjx/q+v0/2xw2HhSjGEIqMYqySLQDJ8/M795AAEBBJAEkAAV1eRJFXkAM48F3IkiPBdyJAAAASQAAAAAAAeK+ldfc6X/Uw/kme1Z436U43wMXpiKfjGaLV5dGk+dTy+P1URAumitQsbPp4bWErOLR6DDVMyPLxOpszEWeVkR27LOrU0NeGy44ieRrqqznJbt1/NXazajRlOSjFXb4HpMJhY04pWW7i7WzPnJ9p014Wtn+HXty19idHsLh0nChCMk3JTyrOm+NpcTsVty3ebz1X71NWeNhDmjmYnb0IO6e/ss1Yjt7PO6bWneHSnWSNOvjFqcPG7aUoucIuy86PFx9K35fccee2u3/HYZu/DpptG709bG35mlUxf+LnnKu17lEtp34kbQ7a6XZ6CeJb7teR3+i3RqWLaq1k44dPdbc6z0WkdX7DX6A9Hp4t/WK0cuFXmJ3TrSWnodvM+pwgopRSSSVkkrJLRIzvbbtDxfUvUIxzOLFz7z9PCKVNRSjFKMYqySVklokZAGL5uUggASCABJAAAAAYVeQIq8gBnHgu5EkRMgIBIsBAJsLAQCQBAJIAM8h9JyvgJdlej77fE9bJnlfpHV9nVeypQf8A7EWq303zqeYfIWimce02GjBxNn06mMi6nK1iuUTf2Zg87zSX2cf4n+Xu1IRe8UjeXodnY+FKmqs19pNdSPorjLsTfuKcVt+cudlouBzNrVW/J70+o+HL7SZy5TsXi+0K446q9U+7oYjaMnz3djNGpiGylyMLlZtMtfDPy8otSi7NX/uu1dhqYmz60VlX4o/leq7PcX2EoFV6ZJpO8NJM9n0A6GvHSVeunHCQluW9PENfhXoav1HX+jzoxhcRQdXEYXM1UapznOo4VY8X1L26r6t7WftPplKKilGKUYxSSSSSSXBJIrLh13q87Tjx9p95/wAL6UFFKMUoxikkkrJJbkkixFSZkpFHzkswECFQAAAAAAAAAAV1eQFXkALAABIIJAAAAAAJMGZGLYGMjzH0hf6vr/qo/wBWJ6WTPNdPN+AxP/b/AKkC1WuD5tfMPkVhYkso0XOUYRV5SdkvibS+mm0RynB4N1Z5VuXGUuUY6953KlJRioxVoxVkkb2EwCowUVvfGUl+KXy0Mnh2yk2iHlZ9R127cPLbV3Sj2Q+MjnSZ1tvwy1rehD4nKZMTu9PDP8OvhW0RlLLBIlqxUbnoOifRx4yanU3YaD629qVSS/BHRav1ceGtsDYzxMrvq0YvryXnS9CPz5H0vAwjCMYRWWEUlGK4JIpMuDV6rojory7GGUYxjGKUYxSjGMVaMYrgkuSNuEjn0ZG5TKvFmW1EziVxZmiFJZpkmKMiFQAAAAAAAAAAV1eQFXkALCSABJAAAkAACCQBXJlhVLiBg2ed6b/6Dif0w/qRPQyOD00X3HFf8v8A+kTHLXD+uvl8jjFtpJXbaSS4t6I9lsLYvkYXkr1ZrrP8sfyL49pj0Z2KoJVqm+o11I28yL5/qfgelS0Re+SI7Q9HV6nq/JXhpfViqpSOk4lVSkznmd3A+e9JX94l2QgvC/xOQ1/k7fSiP3mfZGmu7qnHaOqsdofQaf5dfDBo29l7OdaW+6guL5vsRjgsI6ktILjL4LtPV7PwtkklZLcil77dmeo1EUjaOXU2fSUYxjFWjFJJLckjs4aFjUwlKyOhTRlEvEtO7apmzBmpA2IMndnLagy1M1ostgyykr4mSKlIzTIQzBCJAAAAAAAAuBXV5AVeQAsAuLgATYWAEE2FgIAFwBVLiW3KpAYMoxNCNSMoTWaMuKfM2DFxIS56wUY8FYiVBG64mLiV6YW3aDpFNWmdJwKqlPcRsnd8q6UW+tV7cpRXrUInNw2FdR25c/kjsbWwU62NxMYLcqzzS9S3HfwGyFBLdwt6ja2SK1iI5exbUxjx1rHOzQwGz7JbklyS5HZw9Cxsww1i+nSsc3LzbWmU0YGzBGEIlsUWiWcrIl0SmJZFl91V8WWJlEWWRZMKyvjIsTKEzNMlC9SJTKkzJMIWJkmNybgSGEwADDIAwqcgKnIATHgu5Elam7E52BapGSmUeUZDqP8AdwNhzMXIp8ox5R9gFhDMFUZHlH2AZsgx8oyM4Egxc+4jOBlYiUTHOxn7gMXExcTNzIciE7tGOzaacmoq8pOUnrJ82ZvCx0NmUjBzKzC3VLWeHRj5E2XMxciNkxKjITlM8xGYjYQomSRGYZi0CxIsRSp9xlnJRK9GcWa6mZxmShspmSNZVGW5yULUZFKmzLOELSUyjyjMlNgWtkFaqMeUYE1eQK5zJA//2Q==',
    label: 'Mariposa',
    diagrams: [
      'https://www.pasajerosdepapel.com/uploads/7/1/2/5/71255215/diagramamariposa_orig.jpg',
    ],
  },
];

export default function Origami() {
  const [selectedImage, setSelectedImage] = useState<ImageItem>(images[0]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleFullscreen = () => {
    if (!isFullscreen && imageRef.current) {
      imageRef.current.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Origami</h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        El origami es el arte japonés de plegar papel para crear figuras y formas. Es una forma de expresión artística que combina precisión, paciencia y creatividad.
      </p>

      <iframe
        width="300"
        height="215"
        src="https://www.youtube.com/embed/X0hyTmlsBUI?si=pZuGcdnBlXNYWi_k"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        className="rounded-md shadow-lg"
        allowFullScreen
      ></iframe>

      <h1 className="text-3xl font-bold my-10">Galería</h1>

      <div className="w-full max-w-4xl grid gap-4 mb-8">
        <div
          ref={imageRef}
          className={`relative bg-white rounded-lg shadow-lg ${isFullscreen ? 'min-h-screen overflow-y-auto px-4 pb-6' : ''
            }`}
        >
          <div
            className="cursor-pointer"
            onClick={handleFullscreen}
          >
            <Image
              className="h-auto w-full rounded-lg shadow-lg"
              width="300"
              height="215"
              src={selectedImage.src}
              alt={selectedImage.label}
            />
          </div>
          <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-md text-sm font-semibold">
            {selectedImage.label}
          </div>
          <button
            onClick={handleFullscreen}
            className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-md text-sm hover:bg-gray-200 shadow-md"
          >
            {isFullscreen ? 'Salir pantalla completa' : 'Ver pantalla completa'}
          </button>

          {/* Mostrar diagramas SOLO en pantalla completa */}
          {isFullscreen && selectedImage.diagrams.length > 0 && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 pb-6 min-h-screen overflow-y-auto">
              {selectedImage.diagrams.map((diagram, i) => (
                <Image
                  width="300"
                  height="215"
                  key={i}
                  src={diagram.trimEnd()}
                  alt={`Diagrama ${i + 1}`}
                  className="w-full h-auto rounded-lg shadow border"
                />
              ))}
            </div>
          )}
        </div>

        {/* Miniaturas de las figuras */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                width="300"
                height="215"
                className="h-auto w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                src={img.src}
                alt={img.label}
              />
              <div className="mt-1 text-center text-sm text-gray-600">{img.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
