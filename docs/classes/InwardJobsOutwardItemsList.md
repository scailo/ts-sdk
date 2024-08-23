[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsOutwardItemsList

# Class: InwardJobsOutwardItemsList

Describes the message consisting of the list of inward job outward items

**`Generated`**

from message Scailo.InwardJobsOutwardItemsList

## Hierarchy

- `Message`\<[`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md)\>

  ↳ **`InwardJobsOutwardItemsList`**

## Table of contents

### Constructors

- [constructor](InwardJobsOutwardItemsList.md#constructor)

### Properties

- [list](InwardJobsOutwardItemsList.md#list)
- [fields](InwardJobsOutwardItemsList.md#fields)
- [runtime](InwardJobsOutwardItemsList.md#runtime)
- [typeName](InwardJobsOutwardItemsList.md#typename)

### Methods

- [clone](InwardJobsOutwardItemsList.md#clone)
- [equals](InwardJobsOutwardItemsList.md#equals)
- [fromBinary](InwardJobsOutwardItemsList.md#frombinary)
- [fromJson](InwardJobsOutwardItemsList.md#fromjson)
- [fromJsonString](InwardJobsOutwardItemsList.md#fromjsonstring)
- [getType](InwardJobsOutwardItemsList.md#gettype)
- [toBinary](InwardJobsOutwardItemsList.md#tobinary)
- [toJSON](InwardJobsOutwardItemsList.md#tojson)
- [toJson](InwardJobsOutwardItemsList.md#tojson-1)
- [toJsonString](InwardJobsOutwardItemsList.md#tojsonstring)
- [equals](InwardJobsOutwardItemsList.md#equals-1)
- [fromBinary](InwardJobsOutwardItemsList.md#frombinary-1)
- [fromJson](InwardJobsOutwardItemsList.md#fromjson-1)
- [fromJsonString](InwardJobsOutwardItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsOutwardItemsList**(`data?`): [`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md)\> |

#### Returns

[`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md)

#### Overrides

Message\&lt;InwardJobsOutwardItemsList\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:2946

## Properties

### list

• **list**: [`InwardJobOutwardItem`](InwardJobOutwardItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.InwardJobOutwardItem list = 1;

#### Defined in

src/inward_jobs.scailo_pb.ts:2944

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:2953

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:2951

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsOutwardItemsList"``

#### Defined in

src/inward_jobs.scailo_pb.ts:2952

## Methods

### clone

▸ **clone**(): [`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md)

Create a deep copy.

#### Returns

[`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md) \| `PlainMessage`\<[`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md)\>

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
| `a` | `undefined` \| [`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md) \| `PlainMessage`\<[`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md)\> |
| `b` | `undefined` \| [`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md) \| `PlainMessage`\<[`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:2969

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2957

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2961

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsOutwardItemsList`](InwardJobsOutwardItemsList.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2965
