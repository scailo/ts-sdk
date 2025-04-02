[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkOrderAncillaryParameters

# Class: WorkOrderAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.WorkOrderAncillaryParameters

## Hierarchy

- `Message`\<[`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md)\>

  ↳ **`WorkOrderAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](WorkOrderAncillaryParameters.md#constructor)

### Properties

- [locationUuid](WorkOrderAncillaryParameters.md#locationuuid)
- [refUuid](WorkOrderAncillaryParameters.md#refuuid)
- [fields](WorkOrderAncillaryParameters.md#fields)
- [runtime](WorkOrderAncillaryParameters.md#runtime)
- [typeName](WorkOrderAncillaryParameters.md#typename)

### Methods

- [clone](WorkOrderAncillaryParameters.md#clone)
- [equals](WorkOrderAncillaryParameters.md#equals)
- [fromBinary](WorkOrderAncillaryParameters.md#frombinary)
- [fromJson](WorkOrderAncillaryParameters.md#fromjson)
- [fromJsonString](WorkOrderAncillaryParameters.md#fromjsonstring)
- [getType](WorkOrderAncillaryParameters.md#gettype)
- [toBinary](WorkOrderAncillaryParameters.md#tobinary)
- [toJSON](WorkOrderAncillaryParameters.md#tojson)
- [toJson](WorkOrderAncillaryParameters.md#tojson-1)
- [toJsonString](WorkOrderAncillaryParameters.md#tojsonstring)
- [equals](WorkOrderAncillaryParameters.md#equals-1)
- [fromBinary](WorkOrderAncillaryParameters.md#frombinary-1)
- [fromJson](WorkOrderAncillaryParameters.md#fromjson-1)
- [fromJsonString](WorkOrderAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrderAncillaryParameters**(`data?`): [`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md)\> |

#### Returns

[`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md)

#### Overrides

Message\&lt;WorkOrderAncillaryParameters\&gt;.constructor

#### Defined in

src/work_orders.scailo_pb.ts:506

## Properties

### locationUuid

• **locationUuid**: `string` = `""`

The UUID of the location (the UUID of the associated location_id)

**`Generated`**

from field: string location_uuid = 215;

#### Defined in

src/work_orders.scailo_pb.ts:504

___

### refUuid

• **refUuid**: `string` = `""`

The UUID of the ref_id (the UUID of the associated ref_id)

**`Generated`**

from field: string ref_uuid = 213;

#### Defined in

src/work_orders.scailo_pb.ts:497

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/work_orders.scailo_pb.ts:513

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/work_orders.scailo_pb.ts:511

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkOrderAncillaryParameters"``

#### Defined in

src/work_orders.scailo_pb.ts:512

## Methods

### clone

▸ **clone**(): [`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md)

Create a deep copy.

#### Returns

[`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md) \| `PlainMessage`\<[`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md) \| `PlainMessage`\<[`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md)\> |
| `b` | `undefined` \| [`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md) \| `PlainMessage`\<[`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

src/work_orders.scailo_pb.ts:530

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md)

#### Defined in

src/work_orders.scailo_pb.ts:518

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md)

#### Defined in

src/work_orders.scailo_pb.ts:522

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrderAncillaryParameters`](WorkOrderAncillaryParameters.md)

#### Defined in

src/work_orders.scailo_pb.ts:526
