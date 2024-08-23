[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsReturnsItemsList

# Class: InwardJobsFreeIssueMaterialsReturnsItemsList

Describes the message consisting of the list of inward job free issue material return items

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsReturnsItemsList

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsReturnsItemsList`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsReturnsItemsList.md#constructor)

### Properties

- [list](InwardJobsFreeIssueMaterialsReturnsItemsList.md#list)
- [fields](InwardJobsFreeIssueMaterialsReturnsItemsList.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsReturnsItemsList.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsReturnsItemsList.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsReturnsItemsList.md#clone)
- [equals](InwardJobsFreeIssueMaterialsReturnsItemsList.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsItemsList.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsItemsList.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsItemsList.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsReturnsItemsList.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsReturnsItemsList.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsReturnsItemsList.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsReturnsItemsList.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsReturnsItemsList.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsReturnsItemsList.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsItemsList.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsItemsList.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsReturnsItemsList**(`data?`): [`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsReturnsItemsList\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:928

## Properties

### list

• **list**: [`InwardJobFreeIssueMaterialReturnItem`](InwardJobFreeIssueMaterialReturnItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.InwardJobFreeIssueMaterialReturnItem list = 1;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:926

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:935

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:933

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsReturnsItemsList"``

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:934

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:951

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:939

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:943

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsItemsList`](InwardJobsFreeIssueMaterialsReturnsItemsList.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:947
