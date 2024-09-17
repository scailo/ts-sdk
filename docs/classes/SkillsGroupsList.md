[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillsGroupsList

# Class: SkillsGroupsList

Describes the message consisting of the list of skills groups

**`Generated`**

from message Scailo.SkillsGroupsList

## Hierarchy

- `Message`\<[`SkillsGroupsList`](SkillsGroupsList.md)\>

  ↳ **`SkillsGroupsList`**

## Table of contents

### Constructors

- [constructor](SkillsGroupsList.md#constructor)

### Properties

- [list](SkillsGroupsList.md#list)
- [fields](SkillsGroupsList.md#fields)
- [runtime](SkillsGroupsList.md#runtime)
- [typeName](SkillsGroupsList.md#typename)

### Methods

- [clone](SkillsGroupsList.md#clone)
- [equals](SkillsGroupsList.md#equals)
- [fromBinary](SkillsGroupsList.md#frombinary)
- [fromJson](SkillsGroupsList.md#fromjson)
- [fromJsonString](SkillsGroupsList.md#fromjsonstring)
- [getType](SkillsGroupsList.md#gettype)
- [toBinary](SkillsGroupsList.md#tobinary)
- [toJSON](SkillsGroupsList.md#tojson)
- [toJson](SkillsGroupsList.md#tojson-1)
- [toJsonString](SkillsGroupsList.md#tojsonstring)
- [equals](SkillsGroupsList.md#equals-1)
- [fromBinary](SkillsGroupsList.md#frombinary-1)
- [fromJson](SkillsGroupsList.md#fromjson-1)
- [fromJsonString](SkillsGroupsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsGroupsList**(`data?`): [`SkillsGroupsList`](SkillsGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillsGroupsList`](SkillsGroupsList.md)\> |

#### Returns

[`SkillsGroupsList`](SkillsGroupsList.md)

#### Overrides

Message\&lt;SkillsGroupsList\&gt;.constructor

#### Defined in

src/skills_groups.scailo_pb.ts:811

## Properties

### list

• **list**: [`SkillGroup`](SkillGroup.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SkillGroup list = 1;

#### Defined in

src/skills_groups.scailo_pb.ts:809

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/skills_groups.scailo_pb.ts:818

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/skills_groups.scailo_pb.ts:816

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsGroupsList"``

#### Defined in

src/skills_groups.scailo_pb.ts:817

## Methods

### clone

▸ **clone**(): [`SkillsGroupsList`](SkillsGroupsList.md)

Create a deep copy.

#### Returns

[`SkillsGroupsList`](SkillsGroupsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsGroupsList`](SkillsGroupsList.md) \| `PlainMessage`\<[`SkillsGroupsList`](SkillsGroupsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillsGroupsList`](SkillsGroupsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillsGroupsList`](SkillsGroupsList.md)\>

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
| `a` | `undefined` \| [`SkillsGroupsList`](SkillsGroupsList.md) \| `PlainMessage`\<[`SkillsGroupsList`](SkillsGroupsList.md)\> |
| `b` | `undefined` \| [`SkillsGroupsList`](SkillsGroupsList.md) \| `PlainMessage`\<[`SkillsGroupsList`](SkillsGroupsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/skills_groups.scailo_pb.ts:834

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsGroupsList`](SkillsGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillsGroupsList`](SkillsGroupsList.md)

#### Defined in

src/skills_groups.scailo_pb.ts:822

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsList`](SkillsGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsList`](SkillsGroupsList.md)

#### Defined in

src/skills_groups.scailo_pb.ts:826

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsList`](SkillsGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsList`](SkillsGroupsList.md)

#### Defined in

src/skills_groups.scailo_pb.ts:830
