[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GiXAppRunCountReq

# Class: GiXAppRunCountReq

Describes the request payload of a count filter for app runs

**`Generated`**

from message Scailo.GiXAppRunCountReq

## Hierarchy

- `Message`\<[`GiXAppRunCountReq`](GiXAppRunCountReq.md)\>

  ↳ **`GiXAppRunCountReq`**

## Table of contents

### Constructors

- [constructor](GiXAppRunCountReq.md#constructor)

### Properties

- [creationTimestampEnd](GiXAppRunCountReq.md#creationtimestampend)
- [creationTimestampStart](GiXAppRunCountReq.md#creationtimestampstart)
- [isActive](GiXAppRunCountReq.md#isactive)
- [modificationTimestampEnd](GiXAppRunCountReq.md#modificationtimestampend)
- [modificationTimestampStart](GiXAppRunCountReq.md#modificationtimestampstart)
- [runBy](GiXAppRunCountReq.md#runby)
- [vaultFileUuid](GiXAppRunCountReq.md#vaultfileuuid)
- [vaultFileVersionUuid](GiXAppRunCountReq.md#vaultfileversionuuid)
- [fields](GiXAppRunCountReq.md#fields)
- [runtime](GiXAppRunCountReq.md#runtime)
- [typeName](GiXAppRunCountReq.md#typename)

### Methods

- [clone](GiXAppRunCountReq.md#clone)
- [equals](GiXAppRunCountReq.md#equals)
- [fromBinary](GiXAppRunCountReq.md#frombinary)
- [fromJson](GiXAppRunCountReq.md#fromjson)
- [fromJsonString](GiXAppRunCountReq.md#fromjsonstring)
- [getType](GiXAppRunCountReq.md#gettype)
- [toBinary](GiXAppRunCountReq.md#tobinary)
- [toJSON](GiXAppRunCountReq.md#tojson)
- [toJson](GiXAppRunCountReq.md#tojson-1)
- [toJsonString](GiXAppRunCountReq.md#tojsonstring)
- [equals](GiXAppRunCountReq.md#equals-1)
- [fromBinary](GiXAppRunCountReq.md#frombinary-1)
- [fromJson](GiXAppRunCountReq.md#fromjson-1)
- [fromJsonString](GiXAppRunCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GiXAppRunCountReq**(`data?`): [`GiXAppRunCountReq`](GiXAppRunCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GiXAppRunCountReq`](GiXAppRunCountReq.md)\> |

#### Returns

[`GiXAppRunCountReq`](GiXAppRunCountReq.md)

#### Overrides

Message\&lt;GiXAppRunCountReq\&gt;.constructor

#### Defined in

src/vault_commons.scailo_pb.ts:853

## Properties

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/vault_commons.scailo_pb.ts:814

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/vault_commons.scailo_pb.ts:807

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/vault_commons.scailo_pb.ts:800

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/vault_commons.scailo_pb.ts:828

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/vault_commons.scailo_pb.ts:821

___

### runBy

• **runBy**: `string` = `""`

The username of the user who executed the app

**`Generated`**

from field: string run_by = 30;

#### Defined in

src/vault_commons.scailo_pb.ts:851

___

### vaultFileUuid

• **vaultFileUuid**: `string` = `""`

The UUID of the file

**`Generated`**

from field: string vault_file_uuid = 20;

#### Defined in

src/vault_commons.scailo_pb.ts:835

___

### vaultFileVersionUuid

• **vaultFileVersionUuid**: `string` = `""`

The UUID of the version

--------------------------------------------------------

**`Generated`**

from field: string vault_file_version_uuid = 21;

#### Defined in

src/vault_commons.scailo_pb.ts:844

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_commons.scailo_pb.ts:860

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_commons.scailo_pb.ts:858

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GiXAppRunCountReq"``

#### Defined in

src/vault_commons.scailo_pb.ts:859

## Methods

### clone

▸ **clone**(): [`GiXAppRunCountReq`](GiXAppRunCountReq.md)

Create a deep copy.

#### Returns

[`GiXAppRunCountReq`](GiXAppRunCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GiXAppRunCountReq`](GiXAppRunCountReq.md) \| `PlainMessage`\<[`GiXAppRunCountReq`](GiXAppRunCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GiXAppRunCountReq`](GiXAppRunCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GiXAppRunCountReq`](GiXAppRunCountReq.md)\>

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
| `a` | `undefined` \| [`GiXAppRunCountReq`](GiXAppRunCountReq.md) \| `PlainMessage`\<[`GiXAppRunCountReq`](GiXAppRunCountReq.md)\> |
| `b` | `undefined` \| [`GiXAppRunCountReq`](GiXAppRunCountReq.md) \| `PlainMessage`\<[`GiXAppRunCountReq`](GiXAppRunCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_commons.scailo_pb.ts:883

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GiXAppRunCountReq`](GiXAppRunCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GiXAppRunCountReq`](GiXAppRunCountReq.md)

#### Defined in

src/vault_commons.scailo_pb.ts:871

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GiXAppRunCountReq`](GiXAppRunCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXAppRunCountReq`](GiXAppRunCountReq.md)

#### Defined in

src/vault_commons.scailo_pb.ts:875

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GiXAppRunCountReq`](GiXAppRunCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXAppRunCountReq`](GiXAppRunCountReq.md)

#### Defined in

src/vault_commons.scailo_pb.ts:879
