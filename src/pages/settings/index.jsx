import ConvertTwoFactor from '@/components/ui/sectionUser/two-factor/ConvertTwoFactor';

const Settings = () => {
  return (
    <div>
      <div className='mt-6 py-6 border-t border-slate-200 text-center'>
        <div className='flex flex-wrap justify-center'>
          <ConvertTwoFactor />
        </div>
      </div>
    </div>
  );
};

export default Settings;
