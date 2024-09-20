[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobAncillaryParameters

# Class: InwardJobAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.InwardJobAncillaryParameters

## Hierarchy

- `Message`\<[`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md)\>

  ↳ **`InwardJobAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](InwardJobAncillaryParameters.md#constructor)

### Properties

- [buyerClientUuid](InwardJobAncillaryParameters.md#buyerclientuuid)
- [consigneeClientUuid](InwardJobAncillaryParameters.md#consigneeclientuuid)
- [locationUuid](InwardJobAncillaryParameters.md#locationuuid)
- [fields](InwardJobAncillaryParameters.md#fields)
- [runtime](InwardJobAncillaryParameters.md#runtime)
- [typeName](InwardJobAncillaryParameters.md#typename)

### Methods

- [clone](InwardJobAncillaryParameters.md#clone)
- [equals](InwardJobAncillaryParameters.md#equals)
- [fromBinary](InwardJobAncillaryParameters.md#frombinary)
- [fromJson](InwardJobAncillaryParameters.md#fromjson)
- [fromJsonString](InwardJobAncillaryParameters.md#fromjsonstring)
- [getType](InwardJobAncillaryParameters.md#gettype)
- [toBinary](InwardJobAncillaryParameters.md#tobinary)
- [toJSON](InwardJobAncillaryParameters.md#tojson)
- [toJson](InwardJobAncillaryParameters.md#tojson-1)
- [toJsonString](InwardJobAncillaryParameters.md#tojsonstring)
- [equals](InwardJobAncillaryParameters.md#equals-1)
- [fromBinary](InwardJobAncillaryParameters.md#frombinary-1)
- [fromJson](InwardJobAncillaryParameters.md#fromjson-1)
- [fromJsonString](InwardJobAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobAncillaryParameters**(`data?`): [`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md)\> |

#### Returns

[`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md)

#### Overrides

Message\&lt;InwardJobAncillaryParameters\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:692

## Properties

### buyerClientUuid

• **buyerClientUuid**: `string` = `""`

The UUID of the buyer client (the UUID of the associated buyer_client_id)

**`Generated`**

from field: string buyer_client_uuid = 213;

#### Defined in

src/inward_jobs.scailo_pb.ts:683

___

### consigneeClientUuid

• **consigneeClientUuid**: `string` = `""`

The UUID of the consignee client (the UUID of the associated consignee_client_id)

**`Generated`**

from field: string consignee_client_uuid = 212;

#### Defined in

src/inward_jobs.scailo_pb.ts:676

___

### locationUuid

• **locationUuid**: `string` = `""`

The UUID of the location (the UUID of the associated location_uuid)

**`Generated`**

from field: string location_uuid = 214;

#### Defined in

src/inward_jobs.scailo_pb.ts:690

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:699

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:697

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobAncillaryParameters"``

#### Defined in

src/inward_jobs.scailo_pb.ts:698

## Methods

### clone

▸ **clone**(): [`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md)

Create a deep copy.

#### Returns

[`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md) \| `PlainMessage`\<[`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md) \| `PlainMessage`\<[`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md)\> |
| `b` | `undefined` \| [`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md) \| `PlainMessage`\<[`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:717

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:705

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:709

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobAncillaryParameters`](InwardJobAncillaryParameters.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:713
