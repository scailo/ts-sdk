[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillsGroupsServiceItemCreateRequest

# Class: SkillsGroupsServiceItemCreateRequest

Describes the parameters required to add a param to a skill group

**`Generated`**

from message Scailo.SkillsGroupsServiceItemCreateRequest

## Hierarchy

- `Message`\<[`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md)\>

  ↳ **`SkillsGroupsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](SkillsGroupsServiceItemCreateRequest.md#constructor)

### Properties

- [description](SkillsGroupsServiceItemCreateRequest.md#description)
- [inputValueType](SkillsGroupsServiceItemCreateRequest.md#inputvaluetype)
- [numberMaxValue](SkillsGroupsServiceItemCreateRequest.md#numbermaxvalue)
- [numberMinValue](SkillsGroupsServiceItemCreateRequest.md#numberminvalue)
- [skillGroupId](SkillsGroupsServiceItemCreateRequest.md#skillgroupid)
- [skillParamId](SkillsGroupsServiceItemCreateRequest.md#skillparamid)
- [textValues](SkillsGroupsServiceItemCreateRequest.md#textvalues)
- [userComment](SkillsGroupsServiceItemCreateRequest.md#usercomment)
- [fields](SkillsGroupsServiceItemCreateRequest.md#fields)
- [runtime](SkillsGroupsServiceItemCreateRequest.md#runtime)
- [typeName](SkillsGroupsServiceItemCreateRequest.md#typename)

### Methods

- [clone](SkillsGroupsServiceItemCreateRequest.md#clone)
- [equals](SkillsGroupsServiceItemCreateRequest.md#equals)
- [fromBinary](SkillsGroupsServiceItemCreateRequest.md#frombinary)
- [fromJson](SkillsGroupsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](SkillsGroupsServiceItemCreateRequest.md#fromjsonstring)
- [getType](SkillsGroupsServiceItemCreateRequest.md#gettype)
- [toBinary](SkillsGroupsServiceItemCreateRequest.md#tobinary)
- [toJSON](SkillsGroupsServiceItemCreateRequest.md#tojson)
- [toJson](SkillsGroupsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](SkillsGroupsServiceItemCreateRequest.md#tojsonstring)
- [equals](SkillsGroupsServiceItemCreateRequest.md#equals-1)
- [fromBinary](SkillsGroupsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](SkillsGroupsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](SkillsGroupsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsGroupsServiceItemCreateRequest**(`data?`): [`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md)\> |

#### Returns

[`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md)

#### Overrides

Message\&lt;SkillsGroupsServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/skills_groups.scailo_pb.ts:550

## Properties

### description

• **description**: `string` = `""`

An optional description

**`Generated`**

from field: string description = 20;

#### Defined in

src/skills_groups.scailo_pb.ts:548

___

### inputValueType

• **inputValueType**: [`SKILL_GROUP_ITEM_INPUT_VALUE_TYPE`](../enums/SKILL_GROUP_ITEM_INPUT_VALUE_TYPE.md) = `SKILL_GROUP_ITEM_INPUT_VALUE_TYPE.SKILL_GROUP_ITEM_INPUT_VALUE_TYPE_ANY_UNSPECIFIED`

The input value type of the item

**`Generated`**

from field: Scailo.SKILL_GROUP_ITEM_INPUT_VALUE_TYPE input_value_type = 12;

#### Defined in

src/skills_groups.scailo_pb.ts:520

___

### numberMaxValue

• **numberMaxValue**: `bigint` = `protoInt64.zero`

The maximum value (in cents) in case the input value type is number-absolute or number-percentage

**`Generated`**

from field: uint64 number_max_value = 14;

#### Defined in

src/skills_groups.scailo_pb.ts:534

___

### numberMinValue

• **numberMinValue**: `bigint` = `protoInt64.zero`

The minimum value (in cents) in case the input value type is number-absolute or number-percentage

**`Generated`**

from field: uint64 number_min_value = 13;

#### Defined in

src/skills_groups.scailo_pb.ts:527

___

### skillGroupId

• **skillGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the skill group

**`Generated`**

from field: uint64 skill_group_id = 10;

#### Defined in

src/skills_groups.scailo_pb.ts:506

___

### skillParamId

• **skillParamId**: `bigint` = `protoInt64.zero`

The ID of the skill param that is a part of the skill group

**`Generated`**

from field: uint64 skill_param_id = 11;

#### Defined in

src/skills_groups.scailo_pb.ts:513

___

### textValues

• **textValues**: `string`[] = `[]`

The possible values from which a user can choose in case the input type is text-dropdown

**`Generated`**

from field: repeated string text_values = 15;

#### Defined in

src/skills_groups.scailo_pb.ts:541

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/skills_groups.scailo_pb.ts:499

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/skills_groups.scailo_pb.ts:557

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/skills_groups.scailo_pb.ts:555

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsGroupsServiceItemCreateRequest"``

#### Defined in

src/skills_groups.scailo_pb.ts:556

## Methods

### clone

▸ **clone**(): [`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md) \| `PlainMessage`\<[`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md) \| `PlainMessage`\<[`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md) \| `PlainMessage`\<[`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/skills_groups.scailo_pb.ts:580

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md)

#### Defined in

src/skills_groups.scailo_pb.ts:568

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md)

#### Defined in

src/skills_groups.scailo_pb.ts:572

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceItemCreateRequest`](SkillsGroupsServiceItemCreateRequest.md)

#### Defined in

src/skills_groups.scailo_pb.ts:576
