import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-100">
      <div className="text-center space-y-6 p-8">
        <div className="animate-bounce">
          <h1 className="text-8xl font-bold text-red-400 mb-4">404</h1>
        </div>
        
        <h2 className="text-3xl font-semibold text-gray-700 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
          Not Found
        </h2>
        
        <p className="text-lg text-gray-600 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
          Could not find requested resource
        </p>
        
        <Link 
          href="/" 
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.9s_both]"
        >
          Return Home
        </Link>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInUp {
            from { 
              opacity: 0; 
              transform: translateY(20px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
        `
      }} />
    </div>
  )
}