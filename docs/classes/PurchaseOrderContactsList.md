[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseOrderContactsList

# Class: PurchaseOrderContactsList

Describes the message consisting of the list of purchase order contacts

**`Generated`**

from message Scailo.PurchaseOrderContactsList

## Hierarchy

- `Message`\<[`PurchaseOrderContactsList`](PurchaseOrderContactsList.md)\>

  ↳ **`PurchaseOrderContactsList`**

## Table of contents

### Constructors

- [constructor](PurchaseOrderContactsList.md#constructor)

### Properties

- [list](PurchaseOrderContactsList.md#list)
- [fields](PurchaseOrderContactsList.md#fields)
- [runtime](PurchaseOrderContactsList.md#runtime)
- [typeName](PurchaseOrderContactsList.md#typename)

### Methods

- [clone](PurchaseOrderContactsList.md#clone)
- [equals](PurchaseOrderContactsList.md#equals)
- [fromBinary](PurchaseOrderContactsList.md#frombinary)
- [fromJson](PurchaseOrderContactsList.md#fromjson)
- [fromJsonString](PurchaseOrderContactsList.md#fromjsonstring)
- [getType](PurchaseOrderContactsList.md#gettype)
- [toBinary](PurchaseOrderContactsList.md#tobinary)
- [toJSON](PurchaseOrderContactsList.md#tojson)
- [toJson](PurchaseOrderContactsList.md#tojson-1)
- [toJsonString](PurchaseOrderContactsList.md#tojsonstring)
- [equals](PurchaseOrderContactsList.md#equals-1)
- [fromBinary](PurchaseOrderContactsList.md#frombinary-1)
- [fromJson](PurchaseOrderContactsList.md#fromjson-1)
- [fromJsonString](PurchaseOrderContactsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseOrderContactsList**(`data?`): [`PurchaseOrderContactsList`](PurchaseOrderContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseOrderContactsList`](PurchaseOrderContactsList.md)\> |

#### Returns

[`PurchaseOrderContactsList`](PurchaseOrderContactsList.md)

#### Overrides

Message\&lt;PurchaseOrderContactsList\&gt;.constructor

#### Defined in

src/purchases_orders.scailo_pb.ts:3112

## Properties

### list

• **list**: [`PurchaseOrderContact`](PurchaseOrderContact.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.PurchaseOrderContact list = 1;

#### Defined in

src/purchases_orders.scailo_pb.ts:3110

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:3119

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:3117

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrderContactsList"``

#### Defined in

src/purchases_orders.scailo_pb.ts:3118

## Methods

### clone

▸ **clone**(): [`PurchaseOrderContactsList`](PurchaseOrderContactsList.md)

Create a deep copy.

#### Returns

[`PurchaseOrderContactsList`](PurchaseOrderContactsList.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseOrderContactsList`](PurchaseOrderContactsList.md) \| `PlainMessage`\<[`PurchaseOrderContactsList`](PurchaseOrderContactsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseOrderContactsList`](PurchaseOrderContactsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseOrderContactsList`](PurchaseOrderContactsList.md)\>

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
| `a` | `undefined` \| [`PurchaseOrderContactsList`](PurchaseOrderContactsList.md) \| `PlainMessage`\<[`PurchaseOrderContactsList`](PurchaseOrderContactsList.md)\> |
| `b` | `undefined` \| [`PurchaseOrderContactsList`](PurchaseOrderContactsList.md) \| `PlainMessage`\<[`PurchaseOrderContactsList`](PurchaseOrderContactsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_orders.scailo_pb.ts:3135

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseOrderContactsList`](PurchaseOrderContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseOrderContactsList`](PurchaseOrderContactsList.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3123

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseOrderContactsList`](PurchaseOrderContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderContactsList`](PurchaseOrderContactsList.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3127

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseOrderContactsList`](PurchaseOrderContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderContactsList`](PurchaseOrderContactsList.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3131
