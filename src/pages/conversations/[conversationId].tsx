import Layout from "@/components/Layout/index";
import "@/sockets/conversationSocket";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { Chat } from "@/components/Chat";
import { useRouter } from "next/router";
import { getMessages } from "@/services/api/messages";
import { useMessagesStore } from "@/store/messages";

export default function Conversation({ show }) {
  const firstRenderRef = useRef(true);
  const { query } = useRouter();

  useEffect(() => {
    firstRenderRef.current = false;
  }, []);

  useEffect(() => {
    if (query.conversationId) {
      useMessagesStore.setState({
        from: "admin",
        chatToken: query.chatToken as string,
        conversationId: query.conversationId as string,
      });
      getMessages(query.conversationId as string);
    }
  }, [query.conversationId]);

  return (
    <>
      <Head>
        <title>Ácidamente - Conversación</title>
      </Head>
      <Layout>
        <div className="flex flex-col justify-start w-full md:w-fit items-center">
          <Chat />
        </div>
      </Layout>
    </>
  );
}
