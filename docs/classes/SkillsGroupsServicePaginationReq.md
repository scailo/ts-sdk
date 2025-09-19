[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillsGroupsServicePaginationReq

# Class: SkillsGroupsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.SkillsGroupsServicePaginationReq

## Hierarchy

- `Message`\<[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)\>

  ↳ **`SkillsGroupsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](SkillsGroupsServicePaginationReq.md#constructor)

### Properties

- [count](SkillsGroupsServicePaginationReq.md#count)
- [isActive](SkillsGroupsServicePaginationReq.md#isactive)
- [offset](SkillsGroupsServicePaginationReq.md#offset)
- [sortKey](SkillsGroupsServicePaginationReq.md#sortkey)
- [sortOrder](SkillsGroupsServicePaginationReq.md#sortorder)
- [status](SkillsGroupsServicePaginationReq.md#status)
- [fields](SkillsGroupsServicePaginationReq.md#fields)
- [runtime](SkillsGroupsServicePaginationReq.md#runtime)
- [typeName](SkillsGroupsServicePaginationReq.md#typename)

### Methods

- [clone](SkillsGroupsServicePaginationReq.md#clone)
- [equals](SkillsGroupsServicePaginationReq.md#equals)
- [fromBinary](SkillsGroupsServicePaginationReq.md#frombinary)
- [fromJson](SkillsGroupsServicePaginationReq.md#fromjson)
- [fromJsonString](SkillsGroupsServicePaginationReq.md#fromjsonstring)
- [getType](SkillsGroupsServicePaginationReq.md#gettype)
- [toBinary](SkillsGroupsServicePaginationReq.md#tobinary)
- [toJSON](SkillsGroupsServicePaginationReq.md#tojson)
- [toJson](SkillsGroupsServicePaginationReq.md#tojson-1)
- [toJsonString](SkillsGroupsServicePaginationReq.md#tojsonstring)
- [equals](SkillsGroupsServicePaginationReq.md#equals-1)
- [fromBinary](SkillsGroupsServicePaginationReq.md#frombinary-1)
- [fromJson](SkillsGroupsServicePaginationReq.md#fromjson-1)
- [fromJsonString](SkillsGroupsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsGroupsServicePaginationReq**(`data?`): [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)\> |

#### Returns

[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

#### Overrides

Message\&lt;SkillsGroupsServicePaginationReq\&gt;.constructor

#### Defined in

[src/skills_groups.scailo_pb.ts:988](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L988)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/skills_groups.scailo_pb.ts:958](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L958)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/skills_groups.scailo_pb.ts:951](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L951)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/skills_groups.scailo_pb.ts:965](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L965)

___

### sortKey

• **sortKey**: [`SKILL_GROUP_SORT_KEY`](../enums/SKILL_GROUP_SORT_KEY.md) = `SKILL_GROUP_SORT_KEY.SKILL_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SKILL_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/skills_groups.scailo_pb.ts:979](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L979)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/skills_groups.scailo_pb.ts:972](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L972)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this skill group

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/skills_groups.scailo_pb.ts:986](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L986)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_groups.scailo_pb.ts:995](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L995)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_groups.scailo_pb.ts:993](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L993)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsGroupsServicePaginationReq"``

#### Defined in

[src/skills_groups.scailo_pb.ts:994](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L994)

## Methods

### clone

▸ **clone**(): [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md) \| `PlainMessage`\<[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md) \| `PlainMessage`\<[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md) \| `PlainMessage`\<[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_groups.scailo_pb.ts:1016](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1016)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:1004](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1004)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:1008](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1008)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServicePaginationReq`](SkillsGroupsServicePaginationReq.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:1012](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1012)
