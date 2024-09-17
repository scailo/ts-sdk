[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesItemsList

# Class: SalesEnquiriesItemsList

Describes the message consisting of the list of sales enquiry items

**`Generated`**

from message Scailo.SalesEnquiriesItemsList

## Hierarchy

- `Message`\<[`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md)\>

  ↳ **`SalesEnquiriesItemsList`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesItemsList.md#constructor)

### Properties

- [list](SalesEnquiriesItemsList.md#list)
- [fields](SalesEnquiriesItemsList.md#fields)
- [runtime](SalesEnquiriesItemsList.md#runtime)
- [typeName](SalesEnquiriesItemsList.md#typename)

### Methods

- [clone](SalesEnquiriesItemsList.md#clone)
- [equals](SalesEnquiriesItemsList.md#equals)
- [fromBinary](SalesEnquiriesItemsList.md#frombinary)
- [fromJson](SalesEnquiriesItemsList.md#fromjson)
- [fromJsonString](SalesEnquiriesItemsList.md#fromjsonstring)
- [getType](SalesEnquiriesItemsList.md#gettype)
- [toBinary](SalesEnquiriesItemsList.md#tobinary)
- [toJSON](SalesEnquiriesItemsList.md#tojson)
- [toJson](SalesEnquiriesItemsList.md#tojson-1)
- [toJsonString](SalesEnquiriesItemsList.md#tojsonstring)
- [equals](SalesEnquiriesItemsList.md#equals-1)
- [fromBinary](SalesEnquiriesItemsList.md#frombinary-1)
- [fromJson](SalesEnquiriesItemsList.md#fromjson-1)
- [fromJsonString](SalesEnquiriesItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesItemsList**(`data?`): [`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md)\> |

#### Returns

[`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md)

#### Overrides

Message\&lt;SalesEnquiriesItemsList\&gt;.constructor

#### Defined in

src/sales_enquiries.scailo_pb.ts:1200

## Properties

### list

• **list**: [`SalesEnquiryItem`](SalesEnquiryItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SalesEnquiryItem list = 1;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1198

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_enquiries.scailo_pb.ts:1207

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_enquiries.scailo_pb.ts:1205

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesItemsList"``

#### Defined in

src/sales_enquiries.scailo_pb.ts:1206

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md) \| `PlainMessage`\<[`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md) \| `PlainMessage`\<[`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md) \| `PlainMessage`\<[`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_enquiries.scailo_pb.ts:1223

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:1211

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:1215

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesItemsList`](SalesEnquiriesItemsList.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:1219
