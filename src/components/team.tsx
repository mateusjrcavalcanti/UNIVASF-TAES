/* eslint-disable @next/next/no-img-element */

export const Team = () => {
  return (
    <div className="w-full">
      <p className="text-3xl font-bold text-white">Equipe:</p>
      <div className="flex flex-col items-top justify-around md:flex-row">
        <Member
          name="Ariel Fernando"
          src="https://media.licdn.com/dms/image/C4D03AQGAPELDg89vtQ/profile-displayphoto-shrink_800_800/0/1660916597360?e=1721260800&v=beta&t=0nBKqGGphegIsPjflNyfuI-k6pfHWz0qRxJP3nreA2M"
          linkedin="ariel-fernando-a746a1b8"
        />
        <Member
          name="Mateus Almeida"
          src="https://media.licdn.com/dms/image/D4D03AQFmSGn09ocaRQ/profile-displayphoto-shrink_800_800/0/1715872927102?e=1721260800&v=beta&t=m-LYYJp443ZQZDeLZiLYAfjgVyhc4yzJwx3Hn-UxrRQ"
          github="mateusalmeiida"
          linkedin="mateus-de-almeida-ribeiro"
        />
        <Member
          name="Mateus Junior"
          src="https://media.licdn.com/dms/image/C4D03AQGmgKWHmbdA8A/profile-displayphoto-shrink_800_800/0/1580687567920?e=1721260800&v=beta&t=bwNR92ziPCOPyKnq8h798_-eHTQcKQECy_aTEQAzNhQ"
          github="mateusjrcavalcanti"
          linkedin="mateusjrcavalcanti"
        />
        <Member
          name="Paulo Henrique"
          src="https://media.licdn.com/dms/image/D4D03AQFakhbeIj_9GA/profile-displayphoto-shrink_800_800/0/1667436508565?e=1723075200&v=beta&t=lT6k9BmtYQua6fjxbw3ZZVYvznGE5d1zETxIoW35EZI"
          github="pauloh-fm"
          linkedin="paulo-henrique-de-farias-martins-1ba477250"
        />
        <Member
          name="Rhaissa Barbosa"
          src="https://media.licdn.com/dms/image/D4E03AQFX4cbBDbXLdQ/profile-displayphoto-shrink_800_800/0/1713216135477?e=1721260800&v=beta&t=-YKX-BPfW4Zg2df3Q6ehd5dfgdrh7kViufpY8p0k9S0"
          linkedin="rhaissa-barbosa-vasconcelos"
        />
      </div>
    </div>
  );
};

const Member = ({
  name,
  src,
  linkedin,
  github,
}: {
  name: string;
  src: string;
  linkedin?: string;
  github?: string;
}) => {
  return (
    <div className="p-4">
      <div className="mb-4 text-center opacity-90">
        <a href="#" className="relative block">
          <img
            alt="profil"
            src={src}
            className="mx-auto object-cover rounded-full h-40 w-40 "
          />
        </a>
      </div>
      <div className="text-center">
        <p className="text-2xl text-white">{name}</p>
      </div>
      {(github || linkedin) && (
        <div className="flex items-center justify-around mt-4 pt-2 mx-auto text-white border-t border-gray-400 w-44">
          {github && (
            <a href={`https://github.com/${github}`} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="text-xl transition-colors duration-200 hover:text-gray-600"
                viewBox="0 0 1792 1792"
              >
                <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
              </svg>
            </a>
          )}
          {linkedin && (
            <a href={`https://www.linkedin.com/in/${linkedin}/`}>
              <svg
                width="40"
                height="40"
                fill="currentColor"
                className="text-xl transition-colors duration-200 hover:text-gray-600 dark:hover:text-white"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  );
};
