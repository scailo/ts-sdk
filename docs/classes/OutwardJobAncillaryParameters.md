[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobAncillaryParameters

# Class: OutwardJobAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.OutwardJobAncillaryParameters

## Hierarchy

- `Message`\<[`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md)\>

  ↳ **`OutwardJobAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](OutwardJobAncillaryParameters.md#constructor)

### Properties

- [consigneeLocationUuid](OutwardJobAncillaryParameters.md#consigneelocationuuid)
- [vendorUuid](OutwardJobAncillaryParameters.md#vendoruuid)
- [fields](OutwardJobAncillaryParameters.md#fields)
- [runtime](OutwardJobAncillaryParameters.md#runtime)
- [typeName](OutwardJobAncillaryParameters.md#typename)

### Methods

- [clone](OutwardJobAncillaryParameters.md#clone)
- [equals](OutwardJobAncillaryParameters.md#equals)
- [fromBinary](OutwardJobAncillaryParameters.md#frombinary)
- [fromJson](OutwardJobAncillaryParameters.md#fromjson)
- [fromJsonString](OutwardJobAncillaryParameters.md#fromjsonstring)
- [getType](OutwardJobAncillaryParameters.md#gettype)
- [toBinary](OutwardJobAncillaryParameters.md#tobinary)
- [toJSON](OutwardJobAncillaryParameters.md#tojson)
- [toJson](OutwardJobAncillaryParameters.md#tojson-1)
- [toJsonString](OutwardJobAncillaryParameters.md#tojsonstring)
- [equals](OutwardJobAncillaryParameters.md#equals-1)
- [fromBinary](OutwardJobAncillaryParameters.md#frombinary-1)
- [fromJson](OutwardJobAncillaryParameters.md#fromjson-1)
- [fromJsonString](OutwardJobAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobAncillaryParameters**(`data?`): [`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md)\> |

#### Returns

[`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md)

#### Overrides

Message\&lt;OutwardJobAncillaryParameters\&gt;.constructor

#### Defined in

[src/outward_jobs.scailo_pb.ts:605](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L605)

## Properties

### consigneeLocationUuid

• **consigneeLocationUuid**: `string` = `""`

The UUID of the consignee location (the UUID of the associated consignee_location_id)

**`Generated`**

from field: string consignee_location_uuid = 212;

#### Defined in

[src/outward_jobs.scailo_pb.ts:596](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L596)

___

### vendorUuid

• **vendorUuid**: `string` = `""`

The UUID of the vendor (the UUID of the associated vendor_id)

**`Generated`**

from field: string vendor_uuid = 213;

#### Defined in

[src/outward_jobs.scailo_pb.ts:603](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L603)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs.scailo_pb.ts:612](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L612)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs.scailo_pb.ts:610](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L610)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobAncillaryParameters"``

#### Defined in

[src/outward_jobs.scailo_pb.ts:611](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L611)

## Methods

### clone

▸ **clone**(): [`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md)

Create a deep copy.

#### Returns

[`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md) \| `PlainMessage`\<[`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md) \| `PlainMessage`\<[`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md)\> |
| `b` | `undefined` \| [`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md) \| `PlainMessage`\<[`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs.scailo_pb.ts:629](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L629)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:617](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L617)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:621](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L621)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobAncillaryParameters`](OutwardJobAncillaryParameters.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:625](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L625)
