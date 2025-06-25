import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

export default function ProjectModal({ project, onClose }) {
  return (
    <Transition appear show={!!project} as={Fragment}>
      <Dialog as="div" className="relative z-50 font-mono" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full px-4 py-10">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-lg bg-gray-900 border border-gray-700 p-6 text-left shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-green-400 text-lg mb-2">
                  $ cat {project.title}
                </Dialog.Title>
                
                <pre className="bg-black text-white p-4 rounded text-sm whitespace-pre-wrap">{project.description}</pre>
                
                <div className="mt-4">
                  <p className="text-green-400 mb-1">$ tech-stack</p>
                  <ul className="list-disc ml-6 text-white text-sm">
                    {project.techStack.map((tech, idx) => (
                      <li key={idx}>{tech}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row sm:justify-between gap-2">
                  <a
                    href={project.github}
                    className="text-blue-400 hover:underline text-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </a>
                  <button
                    disabled
                    className="bg-gray-700 text-white text-sm px-3 py-1 rounded opacity-50 cursor-not-allowed"
                  >
                    Demo Coming Soon
                  </button>
                </div>

                <div className="mt-6 text-right">
                  <button
                    onClick={onClose}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded text-sm"
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
