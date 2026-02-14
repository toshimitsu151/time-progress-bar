import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // ステータスバーアイテムを作成
    const statusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Right,
        100
    );
    
    // 表示を更新する関数
    function updateClock() {
        const now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();
        
        // プログレスバーを生成（5分単位で12個のブロック）
        const progress = Math.floor(minute / 5); // 0-11の範囲
        const filled = '■'.repeat(progress);
        const empty = '□'.repeat(12 - progress);
        
        // アイコンと時間を表示（時のみ）
        statusBarItem.text = `$(clock) ${String(hour).padStart(2, '0')} ${filled}${empty}`;
        statusBarItem.tooltip = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
        statusBarItem.show();
    }
    
    // 初回表示
    updateClock();
    
    // 1分ごとに更新
    const interval = setInterval(updateClock, 60000);
    
    // クリーンアップ
    context.subscriptions.push(statusBarItem);
    context.subscriptions.push({
        dispose: () => clearInterval(interval)
    });
}

export function deactivate() {}