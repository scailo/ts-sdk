[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / GoalsServiceItemCreateRequest

# Class: GoalsServiceItemCreateRequest

Describes the parameters required to add an item to a goal

**`Generated`**

from message Scailo.GoalsServiceItemCreateRequest

## Hierarchy

- `Message`\<[`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md)\>

  ↳ **`GoalsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](GoalsServiceItemCreateRequest.md#constructor)

### Properties

- [goalId](GoalsServiceItemCreateRequest.md#goalid)
- [inputValueType](GoalsServiceItemCreateRequest.md#inputvaluetype)
- [labelId](GoalsServiceItemCreateRequest.md#labelid)
- [name](GoalsServiceItemCreateRequest.md#name)
- [numberAcceptableValue](GoalsServiceItemCreateRequest.md#numberacceptablevalue)
- [numberMaxValue](GoalsServiceItemCreateRequest.md#numbermaxvalue)
- [numberMinValue](GoalsServiceItemCreateRequest.md#numberminvalue)
- [specifications](GoalsServiceItemCreateRequest.md#specifications)
- [textAcceptableValue](GoalsServiceItemCreateRequest.md#textacceptablevalue)
- [textValues](GoalsServiceItemCreateRequest.md#textvalues)
- [userComment](GoalsServiceItemCreateRequest.md#usercomment)
- [fields](GoalsServiceItemCreateRequest.md#fields)
- [runtime](GoalsServiceItemCreateRequest.md#runtime)
- [typeName](GoalsServiceItemCreateRequest.md#typename)

### Methods

- [clone](GoalsServiceItemCreateRequest.md#clone)
- [equals](GoalsServiceItemCreateRequest.md#equals)
- [fromBinary](GoalsServiceItemCreateRequest.md#frombinary)
- [fromJson](GoalsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](GoalsServiceItemCreateRequest.md#fromjsonstring)
- [getType](GoalsServiceItemCreateRequest.md#gettype)
- [toBinary](GoalsServiceItemCreateRequest.md#tobinary)
- [toJSON](GoalsServiceItemCreateRequest.md#tojson)
- [toJson](GoalsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](GoalsServiceItemCreateRequest.md#tojsonstring)
- [equals](GoalsServiceItemCreateRequest.md#equals-1)
- [fromBinary](GoalsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](GoalsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](GoalsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsServiceItemCreateRequest**(`data?`): [`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md)\> |

#### Returns

[`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md)

#### Overrides

Message\&lt;GoalsServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/goals.scailo_pb.ts:689

## Properties

### goalId

• **goalId**: `bigint` = `protoInt64.zero`

Stores the goal ID

**`Generated`**

from field: uint64 goal_id = 10;

#### Defined in

src/goals.scailo_pb.ts:624

___

### inputValueType

• **inputValueType**: [`GOAL_ITEM_INPUT_VALUE_TYPE`](../enums/GOAL_ITEM_INPUT_VALUE_TYPE.md) = `GOAL_ITEM_INPUT_VALUE_TYPE.GOAL_ITEM_INPUT_VALUE_TYPE_NUMBER_ABSOLUTE_UNSPECIFIED`

The input value type of the item

**`Generated`**

from field: Scailo.GOAL_ITEM_INPUT_VALUE_TYPE input_value_type = 20;

#### Defined in

src/goals.scailo_pb.ts:652

___

### labelId

• **labelId**: `bigint` = `protoInt64.zero`

Stores an optional label

**`Generated`**

from field: uint64 label_id = 12;

#### Defined in

src/goals.scailo_pb.ts:638

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

src/goals.scailo_pb.ts:631

___

### numberAcceptableValue

• **numberAcceptableValue**: `bigint` = `protoInt64.zero`

The acceptable value of the item in case input_value_type is of number type

**`Generated`**

from field: uint64 number_acceptable_value = 23;

#### Defined in

src/goals.scailo_pb.ts:673

___

### numberMaxValue

• **numberMaxValue**: `bigint` = `protoInt64.zero`

The maximum value (in cents) in case the input value type is number-absolute or number-percentage

**`Generated`**

from field: uint64 number_max_value = 22;

#### Defined in

src/goals.scailo_pb.ts:666

___

### numberMinValue

• **numberMinValue**: `bigint` = `protoInt64.zero`

The minimum value (in cents) in case the input value type is number-absolute or number-percentage

**`Generated`**

from field: uint64 number_min_value = 21;

#### Defined in

src/goals.scailo_pb.ts:659

___

### specifications

• **specifications**: `string` = `""`

The specifications of the item

**`Generated`**

from field: string specifications = 13;

#### Defined in

src/goals.scailo_pb.ts:645

___

### textAcceptableValue

• **textAcceptableValue**: `string` = `""`

The acceptable value of the item in case input_value_type is of text type

**`Generated`**

from field: string text_acceptable_value = 31;

#### Defined in

src/goals.scailo_pb.ts:687

___

### textValues

• **textValues**: `string`[] = `[]`

The possible values from which a user can choose in case the input type is text-dropdown

**`Generated`**

from field: repeated string text_values = 30;

#### Defined in

src/goals.scailo_pb.ts:680

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/goals.scailo_pb.ts:617

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goals.scailo_pb.ts:696

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goals.scailo_pb.ts:694

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoalsServiceItemCreateRequest"``

#### Defined in

src/goals.scailo_pb.ts:695

## Methods

### clone

▸ **clone**(): [`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md) \| `PlainMessage`\<[`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md) \| `PlainMessage`\<[`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md) \| `PlainMessage`\<[`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/goals.scailo_pb.ts:722

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md)

#### Defined in

src/goals.scailo_pb.ts:710

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md)

#### Defined in

src/goals.scailo_pb.ts:714

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceItemCreateRequest`](GoalsServiceItemCreateRequest.md)

#### Defined in

src/goals.scailo_pb.ts:718
