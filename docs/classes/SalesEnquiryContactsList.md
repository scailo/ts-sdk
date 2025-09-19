[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiryContactsList

# Class: SalesEnquiryContactsList

Describes the message consisting of the list of sales enquiry contacts

**`Generated`**

from message Scailo.SalesEnquiryContactsList

## Hierarchy

- `Message`\<[`SalesEnquiryContactsList`](SalesEnquiryContactsList.md)\>

  ↳ **`SalesEnquiryContactsList`**

## Table of contents

### Constructors

- [constructor](SalesEnquiryContactsList.md#constructor)

### Properties

- [list](SalesEnquiryContactsList.md#list)
- [fields](SalesEnquiryContactsList.md#fields)
- [runtime](SalesEnquiryContactsList.md#runtime)
- [typeName](SalesEnquiryContactsList.md#typename)

### Methods

- [clone](SalesEnquiryContactsList.md#clone)
- [equals](SalesEnquiryContactsList.md#equals)
- [fromBinary](SalesEnquiryContactsList.md#frombinary)
- [fromJson](SalesEnquiryContactsList.md#fromjson)
- [fromJsonString](SalesEnquiryContactsList.md#fromjsonstring)
- [getType](SalesEnquiryContactsList.md#gettype)
- [toBinary](SalesEnquiryContactsList.md#tobinary)
- [toJSON](SalesEnquiryContactsList.md#tojson)
- [toJson](SalesEnquiryContactsList.md#tojson-1)
- [toJsonString](SalesEnquiryContactsList.md#tojsonstring)
- [equals](SalesEnquiryContactsList.md#equals-1)
- [fromBinary](SalesEnquiryContactsList.md#frombinary-1)
- [fromJson](SalesEnquiryContactsList.md#fromjson-1)
- [fromJsonString](SalesEnquiryContactsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiryContactsList**(`data?`): [`SalesEnquiryContactsList`](SalesEnquiryContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiryContactsList`](SalesEnquiryContactsList.md)\> |

#### Returns

[`SalesEnquiryContactsList`](SalesEnquiryContactsList.md)

#### Overrides

Message\&lt;SalesEnquiryContactsList\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2488](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L2488)

## Properties

### list

• **list**: [`SalesEnquiryContact`](SalesEnquiryContact.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SalesEnquiryContact list = 1;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2486](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L2486)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2495](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L2495)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2493](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L2493)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiryContactsList"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2494](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L2494)

## Methods

### clone

▸ **clone**(): [`SalesEnquiryContactsList`](SalesEnquiryContactsList.md)

Create a deep copy.

#### Returns

[`SalesEnquiryContactsList`](SalesEnquiryContactsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiryContactsList`](SalesEnquiryContactsList.md) \| `PlainMessage`\<[`SalesEnquiryContactsList`](SalesEnquiryContactsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiryContactsList`](SalesEnquiryContactsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiryContactsList`](SalesEnquiryContactsList.md)\>

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
| `a` | `undefined` \| [`SalesEnquiryContactsList`](SalesEnquiryContactsList.md) \| `PlainMessage`\<[`SalesEnquiryContactsList`](SalesEnquiryContactsList.md)\> |
| `b` | `undefined` \| [`SalesEnquiryContactsList`](SalesEnquiryContactsList.md) \| `PlainMessage`\<[`SalesEnquiryContactsList`](SalesEnquiryContactsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2511](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L2511)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiryContactsList`](SalesEnquiryContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiryContactsList`](SalesEnquiryContactsList.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2499](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L2499)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiryContactsList`](SalesEnquiryContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryContactsList`](SalesEnquiryContactsList.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2503](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L2503)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiryContactsList`](SalesEnquiryContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryContactsList`](SalesEnquiryContactsList.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2507](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L2507)
