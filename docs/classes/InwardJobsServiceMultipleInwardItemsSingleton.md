[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsServiceMultipleInwardItemsSingleton

# Class: InwardJobsServiceMultipleInwardItemsSingleton

Describes the parameters required to add an individual item as part of multiple item addition to a inward job

**`Generated`**

from message Scailo.InwardJobsServiceMultipleInwardItemsSingleton

## Hierarchy

- `Message`\<[`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)\>

  ↳ **`InwardJobsServiceMultipleInwardItemsSingleton`**

## Table of contents

### Constructors

- [constructor](InwardJobsServiceMultipleInwardItemsSingleton.md#constructor)

### Properties

- [clientFamilyCode](InwardJobsServiceMultipleInwardItemsSingleton.md#clientfamilycode)
- [clientQuantity](InwardJobsServiceMultipleInwardItemsSingleton.md#clientquantity)
- [clientUomId](InwardJobsServiceMultipleInwardItemsSingleton.md#clientuomid)
- [familyId](InwardJobsServiceMultipleInwardItemsSingleton.md#familyid)
- [internalQuantity](InwardJobsServiceMultipleInwardItemsSingleton.md#internalquantity)
- [specifications](InwardJobsServiceMultipleInwardItemsSingleton.md#specifications)
- [fields](InwardJobsServiceMultipleInwardItemsSingleton.md#fields)
- [runtime](InwardJobsServiceMultipleInwardItemsSingleton.md#runtime)
- [typeName](InwardJobsServiceMultipleInwardItemsSingleton.md#typename)

### Methods

- [clone](InwardJobsServiceMultipleInwardItemsSingleton.md#clone)
- [equals](InwardJobsServiceMultipleInwardItemsSingleton.md#equals)
- [fromBinary](InwardJobsServiceMultipleInwardItemsSingleton.md#frombinary)
- [fromJson](InwardJobsServiceMultipleInwardItemsSingleton.md#fromjson)
- [fromJsonString](InwardJobsServiceMultipleInwardItemsSingleton.md#fromjsonstring)
- [getType](InwardJobsServiceMultipleInwardItemsSingleton.md#gettype)
- [toBinary](InwardJobsServiceMultipleInwardItemsSingleton.md#tobinary)
- [toJSON](InwardJobsServiceMultipleInwardItemsSingleton.md#tojson)
- [toJson](InwardJobsServiceMultipleInwardItemsSingleton.md#tojson-1)
- [toJsonString](InwardJobsServiceMultipleInwardItemsSingleton.md#tojsonstring)
- [equals](InwardJobsServiceMultipleInwardItemsSingleton.md#equals-1)
- [fromBinary](InwardJobsServiceMultipleInwardItemsSingleton.md#frombinary-1)
- [fromJson](InwardJobsServiceMultipleInwardItemsSingleton.md#fromjson-1)
- [fromJsonString](InwardJobsServiceMultipleInwardItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsServiceMultipleInwardItemsSingleton**(`data?`): [`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)\> |

#### Returns

[`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)

#### Overrides

Message\&lt;InwardJobsServiceMultipleInwardItemsSingleton\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:973

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

src/inward_jobs.scailo_pb.ts:964

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

src/inward_jobs.scailo_pb.ts:957

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

src/inward_jobs.scailo_pb.ts:950

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/inward_jobs.scailo_pb.ts:936

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/inward_jobs.scailo_pb.ts:943

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 16;

#### Defined in

src/inward_jobs.scailo_pb.ts:971

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:980

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:978

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsServiceMultipleInwardItemsSingleton"``

#### Defined in

src/inward_jobs.scailo_pb.ts:979

## Methods

### clone

▸ **clone**(): [`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)

Create a deep copy.

#### Returns

[`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md) \| `PlainMessage`\<[`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)\>

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
| `a` | `undefined` \| [`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md) \| `PlainMessage`\<[`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)\> |
| `b` | `undefined` \| [`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md) \| `PlainMessage`\<[`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:1001

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:989

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:993

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceMultipleInwardItemsSingleton`](InwardJobsServiceMultipleInwardItemsSingleton.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:997
