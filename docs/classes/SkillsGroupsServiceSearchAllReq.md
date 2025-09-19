[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillsGroupsServiceSearchAllReq

# Class: SkillsGroupsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.SkillsGroupsServiceSearchAllReq

## Hierarchy

- `Message`\<[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)\>

  ↳ **`SkillsGroupsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](SkillsGroupsServiceSearchAllReq.md#constructor)

### Properties

- [count](SkillsGroupsServiceSearchAllReq.md#count)
- [entityUuid](SkillsGroupsServiceSearchAllReq.md#entityuuid)
- [isActive](SkillsGroupsServiceSearchAllReq.md#isactive)
- [offset](SkillsGroupsServiceSearchAllReq.md#offset)
- [searchKey](SkillsGroupsServiceSearchAllReq.md#searchkey)
- [sortKey](SkillsGroupsServiceSearchAllReq.md#sortkey)
- [sortOrder](SkillsGroupsServiceSearchAllReq.md#sortorder)
- [status](SkillsGroupsServiceSearchAllReq.md#status)
- [fields](SkillsGroupsServiceSearchAllReq.md#fields)
- [runtime](SkillsGroupsServiceSearchAllReq.md#runtime)
- [typeName](SkillsGroupsServiceSearchAllReq.md#typename)

### Methods

- [clone](SkillsGroupsServiceSearchAllReq.md#clone)
- [equals](SkillsGroupsServiceSearchAllReq.md#equals)
- [fromBinary](SkillsGroupsServiceSearchAllReq.md#frombinary)
- [fromJson](SkillsGroupsServiceSearchAllReq.md#fromjson)
- [fromJsonString](SkillsGroupsServiceSearchAllReq.md#fromjsonstring)
- [getType](SkillsGroupsServiceSearchAllReq.md#gettype)
- [toBinary](SkillsGroupsServiceSearchAllReq.md#tobinary)
- [toJSON](SkillsGroupsServiceSearchAllReq.md#tojson)
- [toJson](SkillsGroupsServiceSearchAllReq.md#tojson-1)
- [toJsonString](SkillsGroupsServiceSearchAllReq.md#tojsonstring)
- [equals](SkillsGroupsServiceSearchAllReq.md#equals-1)
- [fromBinary](SkillsGroupsServiceSearchAllReq.md#frombinary-1)
- [fromJson](SkillsGroupsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](SkillsGroupsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsGroupsServiceSearchAllReq**(`data?`): [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)\> |

#### Returns

[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

#### Overrides

Message\&lt;SkillsGroupsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/skills_groups.scailo_pb.ts:1522](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1522)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/skills_groups.scailo_pb.ts:1478](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1478)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/skills_groups.scailo_pb.ts:1506](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1506)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/skills_groups.scailo_pb.ts:1471](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1471)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/skills_groups.scailo_pb.ts:1485](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1485)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/skills_groups.scailo_pb.ts:1520](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1520)

___

### sortKey

• **sortKey**: [`SKILL_GROUP_SORT_KEY`](../enums/SKILL_GROUP_SORT_KEY.md) = `SKILL_GROUP_SORT_KEY.SKILL_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SKILL_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/skills_groups.scailo_pb.ts:1499](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1499)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/skills_groups.scailo_pb.ts:1492](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1492)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/skills_groups.scailo_pb.ts:1513](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1513)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_groups.scailo_pb.ts:1529](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1529)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_groups.scailo_pb.ts:1527](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1527)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsGroupsServiceSearchAllReq"``

#### Defined in

[src/skills_groups.scailo_pb.ts:1528](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1528)

## Methods

### clone

▸ **clone**(): [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md) \| `PlainMessage`\<[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md) \| `PlainMessage`\<[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md) \| `PlainMessage`\<[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_groups.scailo_pb.ts:1552](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1552)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:1540](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1540)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:1544](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1544)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceSearchAllReq`](SkillsGroupsServiceSearchAllReq.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:1548](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L1548)
