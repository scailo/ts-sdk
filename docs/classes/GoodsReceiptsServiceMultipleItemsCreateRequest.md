[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsServiceMultipleItemsCreateRequest

# Class: GoodsReceiptsServiceMultipleItemsCreateRequest

Describes the parameters required to add multiple items to a goods receipt

**`Generated`**

from message Scailo.GoodsReceiptsServiceMultipleItemsCreateRequest

## Hierarchy

- `Message`\<[`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md)\>

  ↳ **`GoodsReceiptsServiceMultipleItemsCreateRequest`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsServiceMultipleItemsCreateRequest.md#constructor)

### Properties

- [goodsReceiptId](GoodsReceiptsServiceMultipleItemsCreateRequest.md#goodsreceiptid)
- [list](GoodsReceiptsServiceMultipleItemsCreateRequest.md#list)
- [userComment](GoodsReceiptsServiceMultipleItemsCreateRequest.md#usercomment)
- [fields](GoodsReceiptsServiceMultipleItemsCreateRequest.md#fields)
- [runtime](GoodsReceiptsServiceMultipleItemsCreateRequest.md#runtime)
- [typeName](GoodsReceiptsServiceMultipleItemsCreateRequest.md#typename)

### Methods

- [clone](GoodsReceiptsServiceMultipleItemsCreateRequest.md#clone)
- [equals](GoodsReceiptsServiceMultipleItemsCreateRequest.md#equals)
- [fromBinary](GoodsReceiptsServiceMultipleItemsCreateRequest.md#frombinary)
- [fromJson](GoodsReceiptsServiceMultipleItemsCreateRequest.md#fromjson)
- [fromJsonString](GoodsReceiptsServiceMultipleItemsCreateRequest.md#fromjsonstring)
- [getType](GoodsReceiptsServiceMultipleItemsCreateRequest.md#gettype)
- [toBinary](GoodsReceiptsServiceMultipleItemsCreateRequest.md#tobinary)
- [toJSON](GoodsReceiptsServiceMultipleItemsCreateRequest.md#tojson)
- [toJson](GoodsReceiptsServiceMultipleItemsCreateRequest.md#tojson-1)
- [toJsonString](GoodsReceiptsServiceMultipleItemsCreateRequest.md#tojsonstring)
- [equals](GoodsReceiptsServiceMultipleItemsCreateRequest.md#equals-1)
- [fromBinary](GoodsReceiptsServiceMultipleItemsCreateRequest.md#frombinary-1)
- [fromJson](GoodsReceiptsServiceMultipleItemsCreateRequest.md#fromjson-1)
- [fromJsonString](GoodsReceiptsServiceMultipleItemsCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsServiceMultipleItemsCreateRequest**(`data?`): [`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md)\> |

#### Returns

[`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md)

#### Overrides

Message\&lt;GoodsReceiptsServiceMultipleItemsCreateRequest\&gt;.constructor

#### Defined in

[src/goods_receipts.scailo_pb.ts:924](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/goods_receipts.scailo_pb.ts#L924)

## Properties

### goodsReceiptId

• **goodsReceiptId**: `bigint` = `protoInt64.zero`

Stores the goods receipt ID

**`Generated`**

from field: uint64 goods_receipt_id = 10;

#### Defined in

[src/goods_receipts.scailo_pb.ts:915](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/goods_receipts.scailo_pb.ts#L915)

___

### list

• **list**: [`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)[] = `[]`

List of items

**`Generated`**

from field: repeated Scailo.GoodsReceiptsServiceMultipleItemsSingleton list = 11;

#### Defined in

[src/goods_receipts.scailo_pb.ts:922](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/goods_receipts.scailo_pb.ts#L922)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/goods_receipts.scailo_pb.ts:908](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/goods_receipts.scailo_pb.ts#L908)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts.scailo_pb.ts:931](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/goods_receipts.scailo_pb.ts#L931)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts.scailo_pb.ts:929](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/goods_receipts.scailo_pb.ts#L929)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsReceiptsServiceMultipleItemsCreateRequest"``

#### Defined in

[src/goods_receipts.scailo_pb.ts:930](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/goods_receipts.scailo_pb.ts#L930)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts.scailo_pb.ts:949](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/goods_receipts.scailo_pb.ts#L949)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:937](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/goods_receipts.scailo_pb.ts#L937)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:941](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/goods_receipts.scailo_pb.ts#L941)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceMultipleItemsCreateRequest`](GoodsReceiptsServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:945](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/goods_receipts.scailo_pb.ts#L945)
