[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServiceItemCreateRequest

# Class: ProductionPlansServiceItemCreateRequest

Describes the parameters required to add an item to a production plan

**`Generated`**

from message Scailo.ProductionPlansServiceItemCreateRequest

## Hierarchy

- `Message`\<[`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md)\>

  ↳ **`ProductionPlansServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServiceItemCreateRequest.md#constructor)

### Properties

- [familyId](ProductionPlansServiceItemCreateRequest.md#familyid)
- [productionPlanId](ProductionPlansServiceItemCreateRequest.md#productionplanid)
- [quantity](ProductionPlansServiceItemCreateRequest.md#quantity)
- [userComment](ProductionPlansServiceItemCreateRequest.md#usercomment)
- [fields](ProductionPlansServiceItemCreateRequest.md#fields)
- [runtime](ProductionPlansServiceItemCreateRequest.md#runtime)
- [typeName](ProductionPlansServiceItemCreateRequest.md#typename)

### Methods

- [clone](ProductionPlansServiceItemCreateRequest.md#clone)
- [equals](ProductionPlansServiceItemCreateRequest.md#equals)
- [fromBinary](ProductionPlansServiceItemCreateRequest.md#frombinary)
- [fromJson](ProductionPlansServiceItemCreateRequest.md#fromjson)
- [fromJsonString](ProductionPlansServiceItemCreateRequest.md#fromjsonstring)
- [getType](ProductionPlansServiceItemCreateRequest.md#gettype)
- [toBinary](ProductionPlansServiceItemCreateRequest.md#tobinary)
- [toJSON](ProductionPlansServiceItemCreateRequest.md#tojson)
- [toJson](ProductionPlansServiceItemCreateRequest.md#tojson-1)
- [toJsonString](ProductionPlansServiceItemCreateRequest.md#tojsonstring)
- [equals](ProductionPlansServiceItemCreateRequest.md#equals-1)
- [fromBinary](ProductionPlansServiceItemCreateRequest.md#frombinary-1)
- [fromJson](ProductionPlansServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](ProductionPlansServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServiceItemCreateRequest**(`data?`): [`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md)\> |

#### Returns

[`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md)

#### Overrides

Message\&lt;ProductionPlansServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/production_plans.scailo_pb.ts:794

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/production_plans.scailo_pb.ts:785

___

### productionPlanId

• **productionPlanId**: `bigint` = `protoInt64.zero`

Stores the production plan ID

**`Generated`**

from field: uint64 production_plan_id = 10;

#### Defined in

src/production_plans.scailo_pb.ts:778

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity being manufactured

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

src/production_plans.scailo_pb.ts:792

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/production_plans.scailo_pb.ts:771

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_plans.scailo_pb.ts:801

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_plans.scailo_pb.ts:799

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlansServiceItemCreateRequest"``

#### Defined in

src/production_plans.scailo_pb.ts:800

## Methods

### clone

▸ **clone**(): [`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md) \| `PlainMessage`\<[`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md) \| `PlainMessage`\<[`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md) \| `PlainMessage`\<[`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_plans.scailo_pb.ts:820

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md)

#### Defined in

src/production_plans.scailo_pb.ts:808

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md)

#### Defined in

src/production_plans.scailo_pb.ts:812

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceItemCreateRequest`](ProductionPlansServiceItemCreateRequest.md)

#### Defined in

src/production_plans.scailo_pb.ts:816
