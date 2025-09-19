[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillsGroupsItemsList

# Class: SkillsGroupsItemsList

Describes the message consisting of the list of skill group params

**`Generated`**

from message Scailo.SkillsGroupsItemsList

## Hierarchy

- `Message`\<[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)\>

  ↳ **`SkillsGroupsItemsList`**

## Table of contents

### Constructors

- [constructor](SkillsGroupsItemsList.md#constructor)

### Properties

- [list](SkillsGroupsItemsList.md#list)
- [fields](SkillsGroupsItemsList.md#fields)
- [runtime](SkillsGroupsItemsList.md#runtime)
- [typeName](SkillsGroupsItemsList.md#typename)

### Methods

- [clone](SkillsGroupsItemsList.md#clone)
- [equals](SkillsGroupsItemsList.md#equals)
- [fromBinary](SkillsGroupsItemsList.md#frombinary)
- [fromJson](SkillsGroupsItemsList.md#fromjson)
- [fromJsonString](SkillsGroupsItemsList.md#fromjsonstring)
- [getType](SkillsGroupsItemsList.md#gettype)
- [toBinary](SkillsGroupsItemsList.md#tobinary)
- [toJSON](SkillsGroupsItemsList.md#tojson)
- [toJson](SkillsGroupsItemsList.md#tojson-1)
- [toJsonString](SkillsGroupsItemsList.md#tojsonstring)
- [equals](SkillsGroupsItemsList.md#equals-1)
- [fromBinary](SkillsGroupsItemsList.md#frombinary-1)
- [fromJson](SkillsGroupsItemsList.md#fromjson-1)
- [fromJsonString](SkillsGroupsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsGroupsItemsList**(`data?`): [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)\> |

#### Returns

[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

#### Overrides

Message\&lt;SkillsGroupsItemsList\&gt;.constructor

#### Defined in

[src/skills_groups.scailo_pb.ts:861](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L861)

## Properties

### list

• **list**: [`SkillGroupItem`](SkillGroupItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SkillGroupItem list = 1;

#### Defined in

[src/skills_groups.scailo_pb.ts:859](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L859)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_groups.scailo_pb.ts:868](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L868)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_groups.scailo_pb.ts:866](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L866)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsGroupsItemsList"``

#### Defined in

[src/skills_groups.scailo_pb.ts:867](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L867)

## Methods

### clone

▸ **clone**(): [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

Create a deep copy.

#### Returns

[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md) \| `PlainMessage`\<[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)\>

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
| `a` | `undefined` \| [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md) \| `PlainMessage`\<[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)\> |
| `b` | `undefined` \| [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md) \| `PlainMessage`\<[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_groups.scailo_pb.ts:884](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L884)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:872](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L872)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:876](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L876)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsItemsList`](SkillsGroupsItemsList.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L880)
