[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlanItemProspectiveInfoRequest

# Class: ProductionPlanItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective production plan item

**`Generated`**

from message Scailo.ProductionPlanItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md)\>

  ↳ **`ProductionPlanItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](ProductionPlanItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](ProductionPlanItemProspectiveInfoRequest.md#familyid)
- [productionPlanId](ProductionPlanItemProspectiveInfoRequest.md#productionplanid)
- [fields](ProductionPlanItemProspectiveInfoRequest.md#fields)
- [runtime](ProductionPlanItemProspectiveInfoRequest.md#runtime)
- [typeName](ProductionPlanItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](ProductionPlanItemProspectiveInfoRequest.md#clone)
- [equals](ProductionPlanItemProspectiveInfoRequest.md#equals)
- [fromBinary](ProductionPlanItemProspectiveInfoRequest.md#frombinary)
- [fromJson](ProductionPlanItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](ProductionPlanItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](ProductionPlanItemProspectiveInfoRequest.md#gettype)
- [toBinary](ProductionPlanItemProspectiveInfoRequest.md#tobinary)
- [toJSON](ProductionPlanItemProspectiveInfoRequest.md#tojson)
- [toJson](ProductionPlanItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](ProductionPlanItemProspectiveInfoRequest.md#tojsonstring)
- [equals](ProductionPlanItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](ProductionPlanItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](ProductionPlanItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](ProductionPlanItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlanItemProspectiveInfoRequest**(`data?`): [`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md)\> |

#### Returns

[`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;ProductionPlanItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

src/production_plans.scailo_pb.ts:1163

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/production_plans.scailo_pb.ts:1161

___

### productionPlanId

• **productionPlanId**: `bigint` = `protoInt64.zero`

Stores the production plan ID

**`Generated`**

from field: uint64 production_plan_id = 10;

#### Defined in

src/production_plans.scailo_pb.ts:1154

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_plans.scailo_pb.ts:1170

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_plans.scailo_pb.ts:1168

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlanItemProspectiveInfoRequest"``

#### Defined in

src/production_plans.scailo_pb.ts:1169

## Methods

### clone

▸ **clone**(): [`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_plans.scailo_pb.ts:1187

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md)

#### Defined in

src/production_plans.scailo_pb.ts:1175

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md)

#### Defined in

src/production_plans.scailo_pb.ts:1179

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlanItemProspectiveInfoRequest`](ProductionPlanItemProspectiveInfoRequest.md)

#### Defined in

src/production_plans.scailo_pb.ts:1183
