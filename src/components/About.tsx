export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-slate-50 rounded-[56px] max-sm:rounded-[32px] p-6 md:p-10 my-10 sm:w-[90%] mx-auto max-sm:mx-3"
    >
      <h2 className="text-3xl lg:text-4xl pb-5 pl-6 sm:px-16 font-bold">
        {"//About"}
      </h2>
      <div className="flex flex-col items-start justify-center h-full">
        <p className="sm:px-16 py-1">
          Я опытный Frontend разработчик с глубокими познаниями в JavaScript,
          TypeScript, React и других современных фреймворках и инструментах
          разработки. У меня есть понимание полного цикла разработки
          веб-приложений, от создания прототипов до развертывания на сервере.
        </p>
        <p className="text-xl font-bold sm:px-16 py-1">Навыки:</p>
        <p className="sm:px-16 py-1">
          - Я владею JavaScript и TypeScript, используя их для создания
          динамических и интерактивных пользовательских интерфейсов.
        </p>
        <p className="sm:px-16 py-1">
          - У меня опыт работы с фреймворком React и его экосистемой, включая
          Redux, Redux-Saga и Next.js. Я умею создавать масштабируемые и
          модульные приложения, используя эти инструменты.
        </p>
        <p className="sm:px-16 py-1">
          - Я знаком с системой контроля версий Git и умею эффективно работать с
          ним, включая решение конфликтов и ведение работы в команде.
        </p>
        <p className="sm:px-16 py-1">
          - У меня есть опыт работы с HTML, HTML5, CSS и CSS препроцессорами
          Sass и SCSS, чтобы создавать стильные и отзывчивые веб-страницы.
        </p>
        <p className="sm:px-16 py-1">
          - Я обладаю навыками работы с базами данных MongoDB, PostgreSQL и
          Redis, включая выполнение запросов и управление данными.
        </p>
        <p className="sm:px-16 py-1">
          - Я знаком с бэкенд технологиями Node.js и Express.js, и умею
          создавать REST API и WebSockets для обмена данными между клиентом и
          сервером.
        </p>
        <p className="sm:px-16 py-1">
          - Я знаком с инструментами Docker и Nginx для развертывания и
          оптимизации веб-приложений.
        </p>
      </div>
    </section>
  );
}
