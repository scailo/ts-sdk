[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesOrdersServiceMultipleItemsCreateRequest

# Class: PurchasesOrdersServiceMultipleItemsCreateRequest

Describes the parameters required to add multiple items to a purchase order

**`Generated`**

from message Scailo.PurchasesOrdersServiceMultipleItemsCreateRequest

## Hierarchy

- `Message`\<[`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md)\>

  ↳ **`PurchasesOrdersServiceMultipleItemsCreateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesOrdersServiceMultipleItemsCreateRequest.md#constructor)

### Properties

- [list](PurchasesOrdersServiceMultipleItemsCreateRequest.md#list)
- [purchaseOrderId](PurchasesOrdersServiceMultipleItemsCreateRequest.md#purchaseorderid)
- [userComment](PurchasesOrdersServiceMultipleItemsCreateRequest.md#usercomment)
- [fields](PurchasesOrdersServiceMultipleItemsCreateRequest.md#fields)
- [runtime](PurchasesOrdersServiceMultipleItemsCreateRequest.md#runtime)
- [typeName](PurchasesOrdersServiceMultipleItemsCreateRequest.md#typename)

### Methods

- [clone](PurchasesOrdersServiceMultipleItemsCreateRequest.md#clone)
- [equals](PurchasesOrdersServiceMultipleItemsCreateRequest.md#equals)
- [fromBinary](PurchasesOrdersServiceMultipleItemsCreateRequest.md#frombinary)
- [fromJson](PurchasesOrdersServiceMultipleItemsCreateRequest.md#fromjson)
- [fromJsonString](PurchasesOrdersServiceMultipleItemsCreateRequest.md#fromjsonstring)
- [getType](PurchasesOrdersServiceMultipleItemsCreateRequest.md#gettype)
- [toBinary](PurchasesOrdersServiceMultipleItemsCreateRequest.md#tobinary)
- [toJSON](PurchasesOrdersServiceMultipleItemsCreateRequest.md#tojson)
- [toJson](PurchasesOrdersServiceMultipleItemsCreateRequest.md#tojson-1)
- [toJsonString](PurchasesOrdersServiceMultipleItemsCreateRequest.md#tojsonstring)
- [equals](PurchasesOrdersServiceMultipleItemsCreateRequest.md#equals-1)
- [fromBinary](PurchasesOrdersServiceMultipleItemsCreateRequest.md#frombinary-1)
- [fromJson](PurchasesOrdersServiceMultipleItemsCreateRequest.md#fromjson-1)
- [fromJsonString](PurchasesOrdersServiceMultipleItemsCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesOrdersServiceMultipleItemsCreateRequest**(`data?`): [`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md)\> |

#### Returns

[`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md)

#### Overrides

Message\&lt;PurchasesOrdersServiceMultipleItemsCreateRequest\&gt;.constructor

#### Defined in

[src/purchases_orders.scailo_pb.ts:1332](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/purchases_orders.scailo_pb.ts#L1332)

## Properties

### list

• **list**: [`PurchasesOrdersServiceMultipleItemsSingleton`](PurchasesOrdersServiceMultipleItemsSingleton.md)[] = `[]`

List of items

**`Generated`**

from field: repeated Scailo.PurchasesOrdersServiceMultipleItemsSingleton list = 11;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1330](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/purchases_orders.scailo_pb.ts#L1330)

___

### purchaseOrderId

• **purchaseOrderId**: `bigint` = `protoInt64.zero`

Stores the purchase order ID

**`Generated`**

from field: uint64 purchase_order_id = 10;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1323](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/purchases_orders.scailo_pb.ts#L1323)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1316](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/purchases_orders.scailo_pb.ts#L1316)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1339](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/purchases_orders.scailo_pb.ts#L1339)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1337](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/purchases_orders.scailo_pb.ts#L1337)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesOrdersServiceMultipleItemsCreateRequest"``

#### Defined in

[src/purchases_orders.scailo_pb.ts:1338](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/purchases_orders.scailo_pb.ts#L1338)

## Methods

### clone

▸ **clone**(): [`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_orders.scailo_pb.ts:1357](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/purchases_orders.scailo_pb.ts#L1357)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1345](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/purchases_orders.scailo_pb.ts#L1345)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1349](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/purchases_orders.scailo_pb.ts#L1349)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceMultipleItemsCreateRequest`](PurchasesOrdersServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:1353](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/purchases_orders.scailo_pb.ts#L1353)
