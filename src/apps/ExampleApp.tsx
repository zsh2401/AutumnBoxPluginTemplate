import { Alert, Card, Typography } from 'antd';
import { useService, useServiceState } from '@autumnbox/sdk/app';

import { ExampleService } from '../services/ExampleService';

import type { AutumnApp } from '@autumnbox/sdk';

const { Title, Text, Paragraph } = Typography;

const exampleIcon = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <rect width="128" height="128" rx="28" fill="#4f46e5"/>
  <text x="64" y="80" text-anchor="middle" font-size="48" fill="white" font-family="system-ui">Ex</text>
</svg>`)}`;

/**
 * 示例 App 组件。
 *
 * 在开发你自己的插件时，请删除此文件，替换为你的业务 App。
 */
const ExampleAppView: React.FC = () => {
  const exampleService = useService(ExampleService);
  const [packageName] = useServiceState(exampleService.packageName);

  return (
    <div style={{ padding: 24, maxWidth: 600 }}>
      <Title level={3}>Example App</Title>

      <Alert
        type="warning"
        showIcon
        message="开发者演示"
        description="这是一个开发者演示用途的 App，请勿发布到用户，否则将导致插件被下架整改。"
        style={{ marginBottom: 16 }}
      />

      <Card title="插件信息">
        <Paragraph>
          包名: <Text code>{packageName}</Text>
        </Paragraph>
        <Paragraph>
          来自 ExampleService: <Text code>{exampleService.getInfo()}</Text>
        </Paragraph>
      </Card>
    </div>
  );
};

export const ExampleApp: AutumnApp = {
  id: 'example',
  name: 'app.name.example',
  icon: exampleIcon,
  singleton: true,
  tags: ['tools'],
  component: ExampleAppView,
};
