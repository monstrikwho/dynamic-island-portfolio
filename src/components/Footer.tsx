import { GithubIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="min-h-[100px] bg-beige mt-10 w-full px-5 md:px-20 flex items-center justify-between rounded-t-2xl rounded-r-2xl">
      <h4 className="text-sm sm:text-base">
        &copy;2023 Страница создана в целях демонстрации Dynamic Island
      </h4>
      <div className="flex justify-between gap-4 ">
        <div className="bg-primary text-white p-2 rounded-full">
          <a href={"https://github.com/monstrikwho"}>
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
