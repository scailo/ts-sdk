[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillsParamsServiceSearchAllReq

# Class: SkillsParamsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.SkillsParamsServiceSearchAllReq

## Hierarchy

- `Message`\<[`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md)\>

  ↳ **`SkillsParamsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](SkillsParamsServiceSearchAllReq.md#constructor)

### Properties

- [count](SkillsParamsServiceSearchAllReq.md#count)
- [entityUuid](SkillsParamsServiceSearchAllReq.md#entityuuid)
- [isActive](SkillsParamsServiceSearchAllReq.md#isactive)
- [offset](SkillsParamsServiceSearchAllReq.md#offset)
- [searchKey](SkillsParamsServiceSearchAllReq.md#searchkey)
- [sortKey](SkillsParamsServiceSearchAllReq.md#sortkey)
- [sortOrder](SkillsParamsServiceSearchAllReq.md#sortorder)
- [status](SkillsParamsServiceSearchAllReq.md#status)
- [fields](SkillsParamsServiceSearchAllReq.md#fields)
- [runtime](SkillsParamsServiceSearchAllReq.md#runtime)
- [typeName](SkillsParamsServiceSearchAllReq.md#typename)

### Methods

- [clone](SkillsParamsServiceSearchAllReq.md#clone)
- [equals](SkillsParamsServiceSearchAllReq.md#equals)
- [fromBinary](SkillsParamsServiceSearchAllReq.md#frombinary)
- [fromJson](SkillsParamsServiceSearchAllReq.md#fromjson)
- [fromJsonString](SkillsParamsServiceSearchAllReq.md#fromjsonstring)
- [getType](SkillsParamsServiceSearchAllReq.md#gettype)
- [toBinary](SkillsParamsServiceSearchAllReq.md#tobinary)
- [toJSON](SkillsParamsServiceSearchAllReq.md#tojson)
- [toJson](SkillsParamsServiceSearchAllReq.md#tojson-1)
- [toJsonString](SkillsParamsServiceSearchAllReq.md#tojsonstring)
- [equals](SkillsParamsServiceSearchAllReq.md#equals-1)
- [fromBinary](SkillsParamsServiceSearchAllReq.md#frombinary-1)
- [fromJson](SkillsParamsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](SkillsParamsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsParamsServiceSearchAllReq**(`data?`): [`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md)\> |

#### Returns

[`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md)

#### Overrides

Message\&lt;SkillsParamsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/skills_params.scailo_pb.ts:997

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/skills_params.scailo_pb.ts:953

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/skills_params.scailo_pb.ts:981

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/skills_params.scailo_pb.ts:946

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/skills_params.scailo_pb.ts:960

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/skills_params.scailo_pb.ts:995

___

### sortKey

• **sortKey**: [`SKILL_PARAM_SORT_KEY`](../enums/SKILL_PARAM_SORT_KEY.md) = `SKILL_PARAM_SORT_KEY.SKILL_PARAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SKILL_PARAM_SORT_KEY sort_key = 5;

#### Defined in

src/skills_params.scailo_pb.ts:974

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/skills_params.scailo_pb.ts:967

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/skills_params.scailo_pb.ts:988

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/skills_params.scailo_pb.ts:1004

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/skills_params.scailo_pb.ts:1002

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsParamsServiceSearchAllReq"``

#### Defined in

src/skills_params.scailo_pb.ts:1003

## Methods

### clone

▸ **clone**(): [`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md) \| `PlainMessage`\<[`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md) \| `PlainMessage`\<[`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md) \| `PlainMessage`\<[`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/skills_params.scailo_pb.ts:1027

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md)

#### Defined in

src/skills_params.scailo_pb.ts:1015

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md)

#### Defined in

src/skills_params.scailo_pb.ts:1019

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceSearchAllReq`](SkillsParamsServiceSearchAllReq.md)

#### Defined in

src/skills_params.scailo_pb.ts:1023
