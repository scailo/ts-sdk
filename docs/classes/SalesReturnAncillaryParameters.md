[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReturnAncillaryParameters

# Class: SalesReturnAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.SalesReturnAncillaryParameters

## Hierarchy

- `Message`\<[`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md)\>

  ↳ **`SalesReturnAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](SalesReturnAncillaryParameters.md#constructor)

### Properties

- [locationUuid](SalesReturnAncillaryParameters.md#locationuuid)
- [refUuid](SalesReturnAncillaryParameters.md#refuuid)
- [fields](SalesReturnAncillaryParameters.md#fields)
- [runtime](SalesReturnAncillaryParameters.md#runtime)
- [typeName](SalesReturnAncillaryParameters.md#typename)

### Methods

- [clone](SalesReturnAncillaryParameters.md#clone)
- [equals](SalesReturnAncillaryParameters.md#equals)
- [fromBinary](SalesReturnAncillaryParameters.md#frombinary)
- [fromJson](SalesReturnAncillaryParameters.md#fromjson)
- [fromJsonString](SalesReturnAncillaryParameters.md#fromjsonstring)
- [getType](SalesReturnAncillaryParameters.md#gettype)
- [toBinary](SalesReturnAncillaryParameters.md#tobinary)
- [toJSON](SalesReturnAncillaryParameters.md#tojson)
- [toJson](SalesReturnAncillaryParameters.md#tojson-1)
- [toJsonString](SalesReturnAncillaryParameters.md#tojsonstring)
- [equals](SalesReturnAncillaryParameters.md#equals-1)
- [fromBinary](SalesReturnAncillaryParameters.md#frombinary-1)
- [fromJson](SalesReturnAncillaryParameters.md#fromjson-1)
- [fromJsonString](SalesReturnAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnAncillaryParameters**(`data?`): [`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md)\> |

#### Returns

[`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md)

#### Overrides

Message\&lt;SalesReturnAncillaryParameters\&gt;.constructor

#### Defined in

src/sales_returns.scailo_pb.ts:456

## Properties

### locationUuid

• **locationUuid**: `string` = `""`

The UUID of the location (the UUID of the associated location_id)

**`Generated`**

from field: string location_uuid = 215;

#### Defined in

src/sales_returns.scailo_pb.ts:454

___

### refUuid

• **refUuid**: `string` = `""`

The UUID of the ref_id (the UUID of the associated ref_id)

**`Generated`**

from field: string ref_uuid = 213;

#### Defined in

src/sales_returns.scailo_pb.ts:447

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_returns.scailo_pb.ts:463

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_returns.scailo_pb.ts:461

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReturnAncillaryParameters"``

#### Defined in

src/sales_returns.scailo_pb.ts:462

## Methods

### clone

▸ **clone**(): [`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md)

Create a deep copy.

#### Returns

[`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md) \| `PlainMessage`\<[`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md) \| `PlainMessage`\<[`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md)\> |
| `b` | `undefined` \| [`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md) \| `PlainMessage`\<[`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_returns.scailo_pb.ts:480

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md)

#### Defined in

src/sales_returns.scailo_pb.ts:468

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md)

#### Defined in

src/sales_returns.scailo_pb.ts:472

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnAncillaryParameters`](SalesReturnAncillaryParameters.md)

#### Defined in

src/sales_returns.scailo_pb.ts:476
