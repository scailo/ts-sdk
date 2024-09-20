[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsServiceMultipleOutwardItemsSingleton

# Class: InwardJobsServiceMultipleOutwardItemsSingleton

Describes the parameters required to add an individual item as part of multiple item addition to a inward job

**`Generated`**

from message Scailo.InwardJobsServiceMultipleOutwardItemsSingleton

## Hierarchy

- `Message`\<[`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)\>

  ↳ **`InwardJobsServiceMultipleOutwardItemsSingleton`**

## Table of contents

### Constructors

- [constructor](InwardJobsServiceMultipleOutwardItemsSingleton.md#constructor)

### Properties

- [clientFamilyCode](InwardJobsServiceMultipleOutwardItemsSingleton.md#clientfamilycode)
- [clientQuantity](InwardJobsServiceMultipleOutwardItemsSingleton.md#clientquantity)
- [clientUomId](InwardJobsServiceMultipleOutwardItemsSingleton.md#clientuomid)
- [deliveryDate](InwardJobsServiceMultipleOutwardItemsSingleton.md#deliverydate)
- [familyId](InwardJobsServiceMultipleOutwardItemsSingleton.md#familyid)
- [internalQuantity](InwardJobsServiceMultipleOutwardItemsSingleton.md#internalquantity)
- [specifications](InwardJobsServiceMultipleOutwardItemsSingleton.md#specifications)
- [fields](InwardJobsServiceMultipleOutwardItemsSingleton.md#fields)
- [runtime](InwardJobsServiceMultipleOutwardItemsSingleton.md#runtime)
- [typeName](InwardJobsServiceMultipleOutwardItemsSingleton.md#typename)

### Methods

- [clone](InwardJobsServiceMultipleOutwardItemsSingleton.md#clone)
- [equals](InwardJobsServiceMultipleOutwardItemsSingleton.md#equals)
- [fromBinary](InwardJobsServiceMultipleOutwardItemsSingleton.md#frombinary)
- [fromJson](InwardJobsServiceMultipleOutwardItemsSingleton.md#fromjson)
- [fromJsonString](InwardJobsServiceMultipleOutwardItemsSingleton.md#fromjsonstring)
- [getType](InwardJobsServiceMultipleOutwardItemsSingleton.md#gettype)
- [toBinary](InwardJobsServiceMultipleOutwardItemsSingleton.md#tobinary)
- [toJSON](InwardJobsServiceMultipleOutwardItemsSingleton.md#tojson)
- [toJson](InwardJobsServiceMultipleOutwardItemsSingleton.md#tojson-1)
- [toJsonString](InwardJobsServiceMultipleOutwardItemsSingleton.md#tojsonstring)
- [equals](InwardJobsServiceMultipleOutwardItemsSingleton.md#equals-1)
- [fromBinary](InwardJobsServiceMultipleOutwardItemsSingleton.md#frombinary-1)
- [fromJson](InwardJobsServiceMultipleOutwardItemsSingleton.md#fromjson-1)
- [fromJsonString](InwardJobsServiceMultipleOutwardItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsServiceMultipleOutwardItemsSingleton**(`data?`): [`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)\> |

#### Returns

[`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)

#### Overrides

Message\&lt;InwardJobsServiceMultipleOutwardItemsSingleton\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:2662

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

src/inward_jobs.scailo_pb.ts:2646

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

src/inward_jobs.scailo_pb.ts:2639

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

src/inward_jobs.scailo_pb.ts:2632

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 16;

#### Defined in

src/inward_jobs.scailo_pb.ts:2653

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/inward_jobs.scailo_pb.ts:2618

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/inward_jobs.scailo_pb.ts:2625

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 17;

#### Defined in

src/inward_jobs.scailo_pb.ts:2660

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:2669

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:2667

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsServiceMultipleOutwardItemsSingleton"``

#### Defined in

src/inward_jobs.scailo_pb.ts:2668

## Methods

### clone

▸ **clone**(): [`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)

Create a deep copy.

#### Returns

[`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md) \| `PlainMessage`\<[`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)\>

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
| `a` | `undefined` \| [`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md) \| `PlainMessage`\<[`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)\> |
| `b` | `undefined` \| [`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md) \| `PlainMessage`\<[`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:2691

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2679

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2683

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceMultipleOutwardItemsSingleton`](InwardJobsServiceMultipleOutwardItemsSingleton.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2687
