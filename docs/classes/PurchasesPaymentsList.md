[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesPaymentsList

# Class: PurchasesPaymentsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.PurchasesPaymentsList

## Hierarchy

- `Message`\<[`PurchasesPaymentsList`](PurchasesPaymentsList.md)\>

  ↳ **`PurchasesPaymentsList`**

## Table of contents

### Constructors

- [constructor](PurchasesPaymentsList.md#constructor)

### Properties

- [list](PurchasesPaymentsList.md#list)
- [fields](PurchasesPaymentsList.md#fields)
- [runtime](PurchasesPaymentsList.md#runtime)
- [typeName](PurchasesPaymentsList.md#typename)

### Methods

- [clone](PurchasesPaymentsList.md#clone)
- [equals](PurchasesPaymentsList.md#equals)
- [fromBinary](PurchasesPaymentsList.md#frombinary)
- [fromJson](PurchasesPaymentsList.md#fromjson)
- [fromJsonString](PurchasesPaymentsList.md#fromjsonstring)
- [getType](PurchasesPaymentsList.md#gettype)
- [toBinary](PurchasesPaymentsList.md#tobinary)
- [toJSON](PurchasesPaymentsList.md#tojson)
- [toJson](PurchasesPaymentsList.md#tojson-1)
- [toJsonString](PurchasesPaymentsList.md#tojsonstring)
- [equals](PurchasesPaymentsList.md#equals-1)
- [fromBinary](PurchasesPaymentsList.md#frombinary-1)
- [fromJson](PurchasesPaymentsList.md#fromjson-1)
- [fromJsonString](PurchasesPaymentsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesPaymentsList**(`data?`): [`PurchasesPaymentsList`](PurchasesPaymentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesPaymentsList`](PurchasesPaymentsList.md)\> |

#### Returns

[`PurchasesPaymentsList`](PurchasesPaymentsList.md)

#### Overrides

Message\&lt;PurchasesPaymentsList\&gt;.constructor

#### Defined in

src/purchases_payments.scailo_pb.ts:569

## Properties

### list

• **list**: [`PurchasePayment`](PurchasePayment.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.PurchasePayment list = 1;

#### Defined in

src/purchases_payments.scailo_pb.ts:567

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_payments.scailo_pb.ts:576

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_payments.scailo_pb.ts:574

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesPaymentsList"``

#### Defined in

src/purchases_payments.scailo_pb.ts:575

## Methods

### clone

▸ **clone**(): [`PurchasesPaymentsList`](PurchasesPaymentsList.md)

Create a deep copy.

#### Returns

[`PurchasesPaymentsList`](PurchasesPaymentsList.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesPaymentsList`](PurchasesPaymentsList.md) \| `PlainMessage`\<[`PurchasesPaymentsList`](PurchasesPaymentsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesPaymentsList`](PurchasesPaymentsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesPaymentsList`](PurchasesPaymentsList.md)\>

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
| `a` | `undefined` \| [`PurchasesPaymentsList`](PurchasesPaymentsList.md) \| `PlainMessage`\<[`PurchasesPaymentsList`](PurchasesPaymentsList.md)\> |
| `b` | `undefined` \| [`PurchasesPaymentsList`](PurchasesPaymentsList.md) \| `PlainMessage`\<[`PurchasesPaymentsList`](PurchasesPaymentsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_payments.scailo_pb.ts:592

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesPaymentsList`](PurchasesPaymentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesPaymentsList`](PurchasesPaymentsList.md)

#### Defined in

src/purchases_payments.scailo_pb.ts:580

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesPaymentsList`](PurchasesPaymentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsList`](PurchasesPaymentsList.md)

#### Defined in

src/purchases_payments.scailo_pb.ts:584

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesPaymentsList`](PurchasesPaymentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsList`](PurchasesPaymentsList.md)

#### Defined in

src/purchases_payments.scailo_pb.ts:588
