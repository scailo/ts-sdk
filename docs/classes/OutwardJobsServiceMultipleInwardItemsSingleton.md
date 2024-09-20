[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServiceMultipleInwardItemsSingleton

# Class: OutwardJobsServiceMultipleInwardItemsSingleton

Describes the parameters required to add an individual item as part of multiple item addition to a outward job

**`Generated`**

from message Scailo.OutwardJobsServiceMultipleInwardItemsSingleton

## Hierarchy

- `Message`\<[`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)\>

  ↳ **`OutwardJobsServiceMultipleInwardItemsSingleton`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServiceMultipleInwardItemsSingleton.md#constructor)

### Properties

- [deliveryDate](OutwardJobsServiceMultipleInwardItemsSingleton.md#deliverydate)
- [familyId](OutwardJobsServiceMultipleInwardItemsSingleton.md#familyid)
- [internalQuantity](OutwardJobsServiceMultipleInwardItemsSingleton.md#internalquantity)
- [specifications](OutwardJobsServiceMultipleInwardItemsSingleton.md#specifications)
- [fields](OutwardJobsServiceMultipleInwardItemsSingleton.md#fields)
- [runtime](OutwardJobsServiceMultipleInwardItemsSingleton.md#runtime)
- [typeName](OutwardJobsServiceMultipleInwardItemsSingleton.md#typename)

### Methods

- [clone](OutwardJobsServiceMultipleInwardItemsSingleton.md#clone)
- [equals](OutwardJobsServiceMultipleInwardItemsSingleton.md#equals)
- [fromBinary](OutwardJobsServiceMultipleInwardItemsSingleton.md#frombinary)
- [fromJson](OutwardJobsServiceMultipleInwardItemsSingleton.md#fromjson)
- [fromJsonString](OutwardJobsServiceMultipleInwardItemsSingleton.md#fromjsonstring)
- [getType](OutwardJobsServiceMultipleInwardItemsSingleton.md#gettype)
- [toBinary](OutwardJobsServiceMultipleInwardItemsSingleton.md#tobinary)
- [toJSON](OutwardJobsServiceMultipleInwardItemsSingleton.md#tojson)
- [toJson](OutwardJobsServiceMultipleInwardItemsSingleton.md#tojson-1)
- [toJsonString](OutwardJobsServiceMultipleInwardItemsSingleton.md#tojsonstring)
- [equals](OutwardJobsServiceMultipleInwardItemsSingleton.md#equals-1)
- [fromBinary](OutwardJobsServiceMultipleInwardItemsSingleton.md#frombinary-1)
- [fromJson](OutwardJobsServiceMultipleInwardItemsSingleton.md#fromjson-1)
- [fromJsonString](OutwardJobsServiceMultipleInwardItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServiceMultipleInwardItemsSingleton**(`data?`): [`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)\> |

#### Returns

[`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)

#### Overrides

Message\&lt;OutwardJobsServiceMultipleInwardItemsSingleton\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:905

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 13;

#### Defined in

src/outward_jobs.scailo_pb.ts:896

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/outward_jobs.scailo_pb.ts:882

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity of the item

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/outward_jobs.scailo_pb.ts:889

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 14;

#### Defined in

src/outward_jobs.scailo_pb.ts:903

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:912

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:910

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServiceMultipleInwardItemsSingleton"``

#### Defined in

src/outward_jobs.scailo_pb.ts:911

## Methods

### clone

▸ **clone**(): [`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)

Create a deep copy.

#### Returns

[`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md) \| `PlainMessage`\<[`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md) \| `PlainMessage`\<[`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)\> |
| `b` | `undefined` \| [`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md) \| `PlainMessage`\<[`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:931

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:919

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:923

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceMultipleInwardItemsSingleton`](OutwardJobsServiceMultipleInwardItemsSingleton.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:927
