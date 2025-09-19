[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesList

# Class: PurchasesEnquiriesList

Describes the message consisting of the list of purchases enquiries

**`Generated`**

from message Scailo.PurchasesEnquiriesList

## Hierarchy

- `Message`\<[`PurchasesEnquiriesList`](PurchasesEnquiriesList.md)\>

  ↳ **`PurchasesEnquiriesList`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesList.md#constructor)

### Properties

- [list](PurchasesEnquiriesList.md#list)
- [fields](PurchasesEnquiriesList.md#fields)
- [runtime](PurchasesEnquiriesList.md#runtime)
- [typeName](PurchasesEnquiriesList.md#typename)

### Methods

- [clone](PurchasesEnquiriesList.md#clone)
- [equals](PurchasesEnquiriesList.md#equals)
- [fromBinary](PurchasesEnquiriesList.md#frombinary)
- [fromJson](PurchasesEnquiriesList.md#fromjson)
- [fromJsonString](PurchasesEnquiriesList.md#fromjsonstring)
- [getType](PurchasesEnquiriesList.md#gettype)
- [toBinary](PurchasesEnquiriesList.md#tobinary)
- [toJSON](PurchasesEnquiriesList.md#tojson)
- [toJson](PurchasesEnquiriesList.md#tojson-1)
- [toJsonString](PurchasesEnquiriesList.md#tojsonstring)
- [equals](PurchasesEnquiriesList.md#equals-1)
- [fromBinary](PurchasesEnquiriesList.md#frombinary-1)
- [fromJson](PurchasesEnquiriesList.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesList**(`data?`): [`PurchasesEnquiriesList`](PurchasesEnquiriesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesEnquiriesList`](PurchasesEnquiriesList.md)\> |

#### Returns

[`PurchasesEnquiriesList`](PurchasesEnquiriesList.md)

#### Overrides

Message\&lt;PurchasesEnquiriesList\&gt;.constructor

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:862](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L862)

## Properties

### list

• **list**: [`PurchaseEnquiry`](PurchaseEnquiry.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.PurchaseEnquiry list = 1;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:860](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L860)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:869](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L869)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:867](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L867)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesEnquiriesList"``

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:868](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L868)

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesList`](PurchasesEnquiriesList.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesList`](PurchasesEnquiriesList.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesList`](PurchasesEnquiriesList.md) \| `PlainMessage`\<[`PurchasesEnquiriesList`](PurchasesEnquiriesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesEnquiriesList`](PurchasesEnquiriesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesEnquiriesList`](PurchasesEnquiriesList.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesList`](PurchasesEnquiriesList.md) \| `PlainMessage`\<[`PurchasesEnquiriesList`](PurchasesEnquiriesList.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesList`](PurchasesEnquiriesList.md) \| `PlainMessage`\<[`PurchasesEnquiriesList`](PurchasesEnquiriesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:885](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L885)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesList`](PurchasesEnquiriesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesList`](PurchasesEnquiriesList.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:873](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L873)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesList`](PurchasesEnquiriesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesList`](PurchasesEnquiriesList.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:877](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L877)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesList`](PurchasesEnquiriesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesList`](PurchasesEnquiriesList.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:881](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L881)
