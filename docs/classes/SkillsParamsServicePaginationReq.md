[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillsParamsServicePaginationReq

# Class: SkillsParamsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.SkillsParamsServicePaginationReq

## Hierarchy

- `Message`\<[`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md)\>

  ↳ **`SkillsParamsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](SkillsParamsServicePaginationReq.md#constructor)

### Properties

- [count](SkillsParamsServicePaginationReq.md#count)
- [isActive](SkillsParamsServicePaginationReq.md#isactive)
- [offset](SkillsParamsServicePaginationReq.md#offset)
- [sortKey](SkillsParamsServicePaginationReq.md#sortkey)
- [sortOrder](SkillsParamsServicePaginationReq.md#sortorder)
- [status](SkillsParamsServicePaginationReq.md#status)
- [fields](SkillsParamsServicePaginationReq.md#fields)
- [runtime](SkillsParamsServicePaginationReq.md#runtime)
- [typeName](SkillsParamsServicePaginationReq.md#typename)

### Methods

- [clone](SkillsParamsServicePaginationReq.md#clone)
- [equals](SkillsParamsServicePaginationReq.md#equals)
- [fromBinary](SkillsParamsServicePaginationReq.md#frombinary)
- [fromJson](SkillsParamsServicePaginationReq.md#fromjson)
- [fromJsonString](SkillsParamsServicePaginationReq.md#fromjsonstring)
- [getType](SkillsParamsServicePaginationReq.md#gettype)
- [toBinary](SkillsParamsServicePaginationReq.md#tobinary)
- [toJSON](SkillsParamsServicePaginationReq.md#tojson)
- [toJson](SkillsParamsServicePaginationReq.md#tojson-1)
- [toJsonString](SkillsParamsServicePaginationReq.md#tojsonstring)
- [equals](SkillsParamsServicePaginationReq.md#equals-1)
- [fromBinary](SkillsParamsServicePaginationReq.md#frombinary-1)
- [fromJson](SkillsParamsServicePaginationReq.md#fromjson-1)
- [fromJsonString](SkillsParamsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsParamsServicePaginationReq**(`data?`): [`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md)\> |

#### Returns

[`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md)

#### Overrides

Message\&lt;SkillsParamsServicePaginationReq\&gt;.constructor

#### Defined in

[src/skills_params.scailo_pb.ts:495](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_params.scailo_pb.ts#L495)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/skills_params.scailo_pb.ts:465](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_params.scailo_pb.ts#L465)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/skills_params.scailo_pb.ts:458](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_params.scailo_pb.ts#L458)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/skills_params.scailo_pb.ts:472](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_params.scailo_pb.ts#L472)

___

### sortKey

• **sortKey**: [`SKILL_PARAM_SORT_KEY`](../enums/SKILL_PARAM_SORT_KEY.md) = `SKILL_PARAM_SORT_KEY.SKILL_PARAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SKILL_PARAM_SORT_KEY sort_key = 5;

#### Defined in

[src/skills_params.scailo_pb.ts:486](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_params.scailo_pb.ts#L486)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/skills_params.scailo_pb.ts:479](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_params.scailo_pb.ts#L479)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this skill param

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/skills_params.scailo_pb.ts:493](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_params.scailo_pb.ts#L493)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_params.scailo_pb.ts:502](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_params.scailo_pb.ts#L502)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_params.scailo_pb.ts:500](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_params.scailo_pb.ts#L500)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsParamsServicePaginationReq"``

#### Defined in

[src/skills_params.scailo_pb.ts:501](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_params.scailo_pb.ts#L501)

## Methods

### clone

▸ **clone**(): [`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md) \| `PlainMessage`\<[`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md) \| `PlainMessage`\<[`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md) \| `PlainMessage`\<[`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_params.scailo_pb.ts:523](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_params.scailo_pb.ts#L523)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md)

#### Defined in

[src/skills_params.scailo_pb.ts:511](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_params.scailo_pb.ts#L511)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md)

#### Defined in

[src/skills_params.scailo_pb.ts:515](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_params.scailo_pb.ts#L515)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServicePaginationReq`](SkillsParamsServicePaginationReq.md)

#### Defined in

[src/skills_params.scailo_pb.ts:519](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_params.scailo_pb.ts#L519)
