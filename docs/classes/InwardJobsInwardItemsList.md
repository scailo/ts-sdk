[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsInwardItemsList

# Class: InwardJobsInwardItemsList

Describes the message consisting of the list of inward job inward items

**`Generated`**

from message Scailo.InwardJobsInwardItemsList

## Hierarchy

- `Message`\<[`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md)\>

  ↳ **`InwardJobsInwardItemsList`**

## Table of contents

### Constructors

- [constructor](InwardJobsInwardItemsList.md#constructor)

### Properties

- [list](InwardJobsInwardItemsList.md#list)
- [fields](InwardJobsInwardItemsList.md#fields)
- [runtime](InwardJobsInwardItemsList.md#runtime)
- [typeName](InwardJobsInwardItemsList.md#typename)

### Methods

- [clone](InwardJobsInwardItemsList.md#clone)
- [equals](InwardJobsInwardItemsList.md#equals)
- [fromBinary](InwardJobsInwardItemsList.md#frombinary)
- [fromJson](InwardJobsInwardItemsList.md#fromjson)
- [fromJsonString](InwardJobsInwardItemsList.md#fromjsonstring)
- [getType](InwardJobsInwardItemsList.md#gettype)
- [toBinary](InwardJobsInwardItemsList.md#tobinary)
- [toJSON](InwardJobsInwardItemsList.md#tojson)
- [toJson](InwardJobsInwardItemsList.md#tojson-1)
- [toJsonString](InwardJobsInwardItemsList.md#tojsonstring)
- [equals](InwardJobsInwardItemsList.md#equals-1)
- [fromBinary](InwardJobsInwardItemsList.md#frombinary-1)
- [fromJson](InwardJobsInwardItemsList.md#fromjson-1)
- [fromJsonString](InwardJobsInwardItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsInwardItemsList**(`data?`): [`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md)\> |

#### Returns

[`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md)

#### Overrides

Message\&lt;InwardJobsInwardItemsList\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:1340

## Properties

### list

• **list**: [`InwardJobInwardItem`](InwardJobInwardItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.InwardJobInwardItem list = 1;

#### Defined in

src/inward_jobs.scailo_pb.ts:1338

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:1347

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:1345

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsInwardItemsList"``

#### Defined in

src/inward_jobs.scailo_pb.ts:1346

## Methods

### clone

▸ **clone**(): [`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md)

Create a deep copy.

#### Returns

[`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md) \| `PlainMessage`\<[`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md)\>

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
| `a` | `undefined` \| [`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md) \| `PlainMessage`\<[`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md)\> |
| `b` | `undefined` \| [`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md) \| `PlainMessage`\<[`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:1363

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:1351

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:1355

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsInwardItemsList`](InwardJobsInwardItemsList.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:1359
