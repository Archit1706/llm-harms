import './globals.css'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LLM Harms - SimPPL',
  description: 'Investigating Extremism in LLM-generated Content on Social Media Platforms',
  // description: 'This research project explores the potential for large language models (LLMs) to generate extremist content on social media, specifically focusing on interactions with content threads on Truth Social. Our goal is to assess the influence and harm posed by both open-source and proprietary LLMs in disseminating misinformation and extremist ideologies.',
  // generator: 'Next.js',
  // applicationName: 'Extremism LLM Research',
  // referrer: 'origin-when-cross-origin',
  // keywords: ['LLM', 'Extremism', 'Social Media', 'Truth Social', 'Misinformation', 'Language Models'],
  // authors: [
  //   { name: 'Dr. Alice Johnson' },
  //   { name: 'Dr. Bob Smith', url: 'https://www.researchuniversity.com' }
  // ],
  // creator: 'Dr. Carol Lee',
  // publisher: 'Research University',
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {children}
      </body>
    </html >
  )
}
