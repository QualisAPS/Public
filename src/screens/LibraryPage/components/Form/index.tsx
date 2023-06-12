/* eslint-disable tailwindcss/no-custom-classname */
export default function Form() {
  return (
    <form className="max-w-xl">
      <fieldset className="mb-6 flex flex-col gap-4">
        <div>
          <label
            htmlFor="first_name"
            className=" mb-2 block text-sm font-medium text-[#141414]"
          >
            Nome
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 block w-full rounded-lg border p-2.5 text-sm text-[#141414] focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Digite seu Nome"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Email"
            className=" mb-2 block text-sm font-medium text-[#141414]"
          >
            E-mail
          </label>
          <input
            type="text"
            id="Email"
            className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 block w-full rounded-lg border p-2.5 text-sm text-[#141414] focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Digite seu E-mail"
            required
          />
        </div>
        <div>
          <label
            htmlFor="assunto"
            className=" mb-2 block text-sm font-medium text-[#141414]"
          >
            Assunto
          </label>
          <input
            type="text"
            id="assunto"
            className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 block w-full rounded-lg border p-2.5 text-sm text-[#141414] focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Digite o assunto"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className=" mb-2 block text-sm font-medium text-[#141414]"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 block w-full rounded-lg border p-2.5 text-sm text-[#141414] focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Digite sua mensagem"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Enviar
        </button>
      </fieldset>
    </form>
  );
}
