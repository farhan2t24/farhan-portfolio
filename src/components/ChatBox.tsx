import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      // Chat functionality placeholder
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full glass-card cosmic-glow flex items-center justify-center group hover:scale-110 transition-all duration-300"
          aria-label="Open chat"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <MessageCircle className="w-8 h-8 text-foreground relative z-10" />
          </div>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] glass-card cosmic-glow flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <span className="text-2xl">👽</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Cosmic Assistant</h3>
                <p className="text-xs text-muted-foreground">Always here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-muted/50"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">👽</span>
                </div>
                <div className="glass-card p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                  <p className="text-sm text-foreground">
                    Hello! I'm your cosmic assistant. Feel free to reach out anytime!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-border/50">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-muted/30 border-border/50"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
