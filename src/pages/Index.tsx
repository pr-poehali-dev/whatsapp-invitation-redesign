import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedResponse, setSelectedResponse] = useState<'yes' | 'no' | null>(null);

  const eventSchedule = [
    { time: '18:00', title: 'Встреча гостей', icon: 'Users' },
    { time: '18:30', title: 'Приветственный фуршет', icon: 'Wine' },
    { time: '19:00', title: 'Торжественная часть', icon: 'PartyPopper' },
    { time: '20:00', title: 'Праздничный ужин', icon: 'UtensilsCrossed' },
    { time: '21:00', title: 'Танцы и развлечения', icon: 'Music' },
    { time: '23:00', title: 'Праздничный торт', icon: 'Cake' },
  ];

  const handleWhatsAppResponse = (response: 'yes' | 'no') => {
    setSelectedResponse(response);
    const message = response === 'yes' 
      ? 'Буду на юбилее! С удовольствием приду поздравить!' 
      : 'К сожалению, не смогу присутствовать на празднике.';
    
    const phoneNumber = '79999999999';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="w-24 h-24 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
              <Icon name="Sparkles" size={48} className="text-accent" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
            Юбилей
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-serif">
            Приглашаем Вас разделить с нами радость праздника
          </p>
          <div className="mt-8 space-y-2">
            <div className="flex items-center justify-center gap-2 text-lg">
              <Icon name="Calendar" size={20} className="text-primary" />
              <span className="font-semibold">15 декабря 2024</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Icon name="MapPin" size={20} className="text-primary" />
              <span>Ресторан "Гранд", ул. Центральная, 25</span>
            </div>
          </div>
        </div>

        <Card className="mb-12 animate-scale-in border-2 shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-3">
              <Icon name="Clock" size={32} className="text-accent" />
              Программа вечера
            </h2>
            <div className="space-y-6">
              {eventSchedule.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-6 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={item.icon as any} size={24} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl font-bold text-accent font-serif">{item.time}</span>
                      <span className="text-xl text-foreground">{item.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 shadow-xl animate-scale-in">
          <CardContent className="p-8 md:p-12 text-center">
            <Icon name="MessageCircle" size={48} className="mx-auto mb-6 text-accent" />
            <h2 className="text-3xl font-bold text-primary mb-4">
              Подтверждение присутствия
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Пожалуйста, сообщите нам о своём решении через WhatsApp
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => handleWhatsAppResponse('yes')}
              >
                <Icon name="Check" size={24} className="mr-2" />
                Буду присутствовать
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => handleWhatsAppResponse('no')}
              >
                <Icon name="X" size={24} className="mr-2" />
                Не смогу прийти
              </Button>
            </div>
            {selectedResponse && (
              <p className="mt-6 text-sm text-muted-foreground animate-fade-in">
                Спасибо! Открываем WhatsApp для отправки ответа...
              </p>
            )}
          </CardContent>
        </Card>

        <div className="text-center mt-12 text-muted-foreground animate-fade-in">
          <p className="text-lg">
            Ждём вас с нетерпением! 💜
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
