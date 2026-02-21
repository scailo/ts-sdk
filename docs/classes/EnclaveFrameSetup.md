[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveFrameSetup

# Class: EnclaveFrameSetup

Describes the data that is returned after setting up a frame

**`Generated`**

from message Scailo.EnclaveFrameSetup

## Hierarchy

- `Message`\<[`EnclaveFrameSetup`](EnclaveFrameSetup.md)\>

  ↳ **`EnclaveFrameSetup`**

## Table of contents

### Constructors

- [constructor](EnclaveFrameSetup.md#constructor)

### Properties

- [appEndpoint](EnclaveFrameSetup.md#appendpoint)
- [appVersion](EnclaveFrameSetup.md#appversion)
- [autoRefreshInterval](EnclaveFrameSetup.md#autorefreshinterval)
- [enclaveFrameUuid](EnclaveFrameSetup.md#enclaveframeuuid)
- [enclaveName](EnclaveFrameSetup.md#enclavename)
- [entityUuid](EnclaveFrameSetup.md#entityuuid)
- [expiresAt](EnclaveFrameSetup.md#expiresat)
- [fileUuid](EnclaveFrameSetup.md#fileuuid)
- [height](EnclaveFrameSetup.md#height)
- [sequenceNumber](EnclaveFrameSetup.md#sequencenumber)
- [width](EnclaveFrameSetup.md#width)
- [fields](EnclaveFrameSetup.md#fields)
- [runtime](EnclaveFrameSetup.md#runtime)
- [typeName](EnclaveFrameSetup.md#typename)

### Methods

- [clone](EnclaveFrameSetup.md#clone)
- [equals](EnclaveFrameSetup.md#equals)
- [fromBinary](EnclaveFrameSetup.md#frombinary)
- [fromJson](EnclaveFrameSetup.md#fromjson)
- [fromJsonString](EnclaveFrameSetup.md#fromjsonstring)
- [getType](EnclaveFrameSetup.md#gettype)
- [toBinary](EnclaveFrameSetup.md#tobinary)
- [toJSON](EnclaveFrameSetup.md#tojson)
- [toJson](EnclaveFrameSetup.md#tojson-1)
- [toJsonString](EnclaveFrameSetup.md#tojsonstring)
- [equals](EnclaveFrameSetup.md#equals-1)
- [fromBinary](EnclaveFrameSetup.md#frombinary-1)
- [fromJson](EnclaveFrameSetup.md#fromjson-1)
- [fromJsonString](EnclaveFrameSetup.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveFrameSetup**(`data?`): [`EnclaveFrameSetup`](EnclaveFrameSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveFrameSetup`](EnclaveFrameSetup.md)\> |

#### Returns

[`EnclaveFrameSetup`](EnclaveFrameSetup.md)

#### Overrides

Message\&lt;EnclaveFrameSetup\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:2715](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2715)

## Properties

### appEndpoint

• **appEndpoint**: `string` = `""`

Stores the endpoint of the application execution

**`Generated`**

from field: string app_endpoint = 13;

#### Defined in

[src/vault_commons.scailo_pb.ts:2664](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2664)

___

### appVersion

• **appVersion**: `string` = `""`

Stores the version number of the enclave

**`Generated`**

from field: string app_version = 22;

#### Defined in

[src/vault_commons.scailo_pb.ts:2685](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2685)

___

### autoRefreshInterval

• **autoRefreshInterval**: `bigint` = `protoInt64.zero`

The time in seconds after which the frame needs to be refreshed

**`Generated`**

from field: uint64 auto_refresh_interval = 31;

#### Defined in

[src/vault_commons.scailo_pb.ts:2699](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2699)

___

### enclaveFrameUuid

• **enclaveFrameUuid**: `string` = `""`

Stores the UUID of the enclave frame

**`Generated`**

from field: string enclave_frame_uuid = 20;

#### Defined in

[src/vault_commons.scailo_pb.ts:2671](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2671)

___

### enclaveName

• **enclaveName**: `string` = `""`

Stores the unique identifier of the application

**`Generated`**

from field: string enclave_name = 12;

#### Defined in

[src/vault_commons.scailo_pb.ts:2657](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2657)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:2643](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2643)

___

### expiresAt

• **expiresAt**: `bigint` = `protoInt64.zero`

Stores the expiry timestamp of the frame

**`Generated`**

from field: uint64 expires_at = 10;

#### Defined in

[src/vault_commons.scailo_pb.ts:2650](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2650)

___

### fileUuid

• **fileUuid**: `string` = `""`

Stores the UUID of the file

**`Generated`**

from field: string file_uuid = 21;

#### Defined in

[src/vault_commons.scailo_pb.ts:2678](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2678)

___

### height

• **height**: `bigint` = `protoInt64.zero`

The height of the frame in vh (viewport height)

**`Generated`**

from field: uint64 height = 33;

#### Defined in

[src/vault_commons.scailo_pb.ts:2713](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2713)

___

### sequenceNumber

• **sequenceNumber**: `bigint` = `protoInt64.zero`

The sequence number of the frame

**`Generated`**

from field: uint64 sequence_number = 30;

#### Defined in

[src/vault_commons.scailo_pb.ts:2692](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2692)

___

### width

• **width**: `bigint` = `protoInt64.zero`

The width of the frame, with the possible values being 3, 4, 6, 8, 9, and 12

**`Generated`**

from field: uint64 width = 32;

#### Defined in

[src/vault_commons.scailo_pb.ts:2706](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2706)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:2722](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2722)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:2720](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2720)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveFrameSetup"``

#### Defined in

[src/vault_commons.scailo_pb.ts:2721](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2721)

## Methods

### clone

▸ **clone**(): [`EnclaveFrameSetup`](EnclaveFrameSetup.md)

Create a deep copy.

#### Returns

[`EnclaveFrameSetup`](EnclaveFrameSetup.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveFrameSetup`](EnclaveFrameSetup.md) \| `PlainMessage`\<[`EnclaveFrameSetup`](EnclaveFrameSetup.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveFrameSetup`](EnclaveFrameSetup.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveFrameSetup`](EnclaveFrameSetup.md)\>

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
| `a` | `undefined` \| [`EnclaveFrameSetup`](EnclaveFrameSetup.md) \| `PlainMessage`\<[`EnclaveFrameSetup`](EnclaveFrameSetup.md)\> |
| `b` | `undefined` \| [`EnclaveFrameSetup`](EnclaveFrameSetup.md) \| `PlainMessage`\<[`EnclaveFrameSetup`](EnclaveFrameSetup.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:2748](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2748)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveFrameSetup`](EnclaveFrameSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveFrameSetup`](EnclaveFrameSetup.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2736](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2736)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveFrameSetup`](EnclaveFrameSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveFrameSetup`](EnclaveFrameSetup.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2740](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2740)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveFrameSetup`](EnclaveFrameSetup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveFrameSetup`](EnclaveFrameSetup.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2744](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/vault_commons.scailo_pb.ts#L2744)
