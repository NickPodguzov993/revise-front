import "./App.css";
import "dayjs/locale/ru";
import { SWRConfig } from "swr";
import { RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { fetcher } from "@/shared/api";
import { router } from "@/pages";
import LoginForm from "@/LoginForm";
import {useState} from "react";



export default function App() {
    const [title, setTitle] = useState(true)

    const closeModal = () => {
        setTitle(!title)
    }

  return (
      <div className="div">
          {
              title  ? <LoginForm closeModal={closeModal} /> :
                  <SWRConfig value={{ fetcher }}>
                  <MantineProvider defaultColorScheme="auto">
                      <DatesProvider settings={{ locale: "ru" }}>
                          <RouterProvider router={router} />
                      </DatesProvider>
                  </MantineProvider>
              </SWRConfig>
          }
      </div>

  );
}
