[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesOrdersServiceContactCreateRequest

# Class: PurchasesOrdersServiceContactCreateRequest

Describes the parameters necessary to create a purchase order contact

**`Generated`**

from message Scailo.PurchasesOrdersServiceContactCreateRequest

## Hierarchy

- `Message`\<[`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md)\>

  ↳ **`PurchasesOrdersServiceContactCreateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesOrdersServiceContactCreateRequest.md#constructor)

### Properties

- [associateId](PurchasesOrdersServiceContactCreateRequest.md#associateid)
- [purchaseOrderId](PurchasesOrdersServiceContactCreateRequest.md#purchaseorderid)
- [userComment](PurchasesOrdersServiceContactCreateRequest.md#usercomment)
- [fields](PurchasesOrdersServiceContactCreateRequest.md#fields)
- [runtime](PurchasesOrdersServiceContactCreateRequest.md#runtime)
- [typeName](PurchasesOrdersServiceContactCreateRequest.md#typename)

### Methods

- [clone](PurchasesOrdersServiceContactCreateRequest.md#clone)
- [equals](PurchasesOrdersServiceContactCreateRequest.md#equals)
- [fromBinary](PurchasesOrdersServiceContactCreateRequest.md#frombinary)
- [fromJson](PurchasesOrdersServiceContactCreateRequest.md#fromjson)
- [fromJsonString](PurchasesOrdersServiceContactCreateRequest.md#fromjsonstring)
- [getType](PurchasesOrdersServiceContactCreateRequest.md#gettype)
- [toBinary](PurchasesOrdersServiceContactCreateRequest.md#tobinary)
- [toJSON](PurchasesOrdersServiceContactCreateRequest.md#tojson)
- [toJson](PurchasesOrdersServiceContactCreateRequest.md#tojson-1)
- [toJsonString](PurchasesOrdersServiceContactCreateRequest.md#tojsonstring)
- [equals](PurchasesOrdersServiceContactCreateRequest.md#equals-1)
- [fromBinary](PurchasesOrdersServiceContactCreateRequest.md#frombinary-1)
- [fromJson](PurchasesOrdersServiceContactCreateRequest.md#fromjson-1)
- [fromJsonString](PurchasesOrdersServiceContactCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesOrdersServiceContactCreateRequest**(`data?`): [`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md)\> |

#### Returns

[`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md)

#### Overrides

Message\&lt;PurchasesOrdersServiceContactCreateRequest\&gt;.constructor

#### Defined in

src/purchases_orders.scailo_pb.ts:2989

## Properties

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Stores the associate ID

**`Generated`**

from field: uint64 associate_id = 11;

#### Defined in

src/purchases_orders.scailo_pb.ts:2987

___

### purchaseOrderId

• **purchaseOrderId**: `bigint` = `protoInt64.zero`

Stores the purchase order ID

**`Generated`**

from field: uint64 purchase_order_id = 10;

#### Defined in

src/purchases_orders.scailo_pb.ts:2980

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/purchases_orders.scailo_pb.ts:2973

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:2996

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:2994

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesOrdersServiceContactCreateRequest"``

#### Defined in

src/purchases_orders.scailo_pb.ts:2995

## Methods

### clone

▸ **clone**(): [`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_orders.scailo_pb.ts:3014

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3002

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3006

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceContactCreateRequest`](PurchasesOrdersServiceContactCreateRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3010
