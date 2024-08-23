[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / GiXAppRunFilterReq

# Class: GiXAppRunFilterReq

Describes the base request payload of a filter search for gix app runs

**`Generated`**

from message Scailo.GiXAppRunFilterReq

## Hierarchy

- `Message`\<[`GiXAppRunFilterReq`](GiXAppRunFilterReq.md)\>

  ↳ **`GiXAppRunFilterReq`**

## Table of contents

### Constructors

- [constructor](GiXAppRunFilterReq.md#constructor)

### Properties

- [count](GiXAppRunFilterReq.md#count)
- [creationTimestampEnd](GiXAppRunFilterReq.md#creationtimestampend)
- [creationTimestampStart](GiXAppRunFilterReq.md#creationtimestampstart)
- [isActive](GiXAppRunFilterReq.md#isactive)
- [modificationTimestampEnd](GiXAppRunFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](GiXAppRunFilterReq.md#modificationtimestampstart)
- [offset](GiXAppRunFilterReq.md#offset)
- [runBy](GiXAppRunFilterReq.md#runby)
- [vaultFileUuid](GiXAppRunFilterReq.md#vaultfileuuid)
- [vaultFileVersionUuid](GiXAppRunFilterReq.md#vaultfileversionuuid)
- [fields](GiXAppRunFilterReq.md#fields)
- [runtime](GiXAppRunFilterReq.md#runtime)
- [typeName](GiXAppRunFilterReq.md#typename)

### Methods

- [clone](GiXAppRunFilterReq.md#clone)
- [equals](GiXAppRunFilterReq.md#equals)
- [fromBinary](GiXAppRunFilterReq.md#frombinary)
- [fromJson](GiXAppRunFilterReq.md#fromjson)
- [fromJsonString](GiXAppRunFilterReq.md#fromjsonstring)
- [getType](GiXAppRunFilterReq.md#gettype)
- [toBinary](GiXAppRunFilterReq.md#tobinary)
- [toJSON](GiXAppRunFilterReq.md#tojson)
- [toJson](GiXAppRunFilterReq.md#tojson-1)
- [toJsonString](GiXAppRunFilterReq.md#tojsonstring)
- [equals](GiXAppRunFilterReq.md#equals-1)
- [fromBinary](GiXAppRunFilterReq.md#frombinary-1)
- [fromJson](GiXAppRunFilterReq.md#fromjson-1)
- [fromJsonString](GiXAppRunFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GiXAppRunFilterReq**(`data?`): [`GiXAppRunFilterReq`](GiXAppRunFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GiXAppRunFilterReq`](GiXAppRunFilterReq.md)\> |

#### Returns

[`GiXAppRunFilterReq`](GiXAppRunFilterReq.md)

#### Overrides

Message\&lt;GiXAppRunFilterReq\&gt;.constructor

#### Defined in

src/vault_commons.scailo_pb.ts:972

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/vault_commons.scailo_pb.ts:907

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/vault_commons.scailo_pb.ts:933

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/vault_commons.scailo_pb.ts:926

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/vault_commons.scailo_pb.ts:900

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/vault_commons.scailo_pb.ts:947

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/vault_commons.scailo_pb.ts:940

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

// The sort order that is to be used to fetch the pagination response
SORT_ORDER sort_order = 4;
// The sort key that is to be used to fetch the pagination response
VAULT_SORT_KEY sort_key = 5;

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/vault_commons.scailo_pb.ts:919

___

### runBy

• **runBy**: `string` = `""`

The username of the user who executed the app

**`Generated`**

from field: string run_by = 30;

#### Defined in

src/vault_commons.scailo_pb.ts:970

___

### vaultFileUuid

• **vaultFileUuid**: `string` = `""`

The UUID of the file

**`Generated`**

from field: string vault_file_uuid = 20;

#### Defined in

src/vault_commons.scailo_pb.ts:954

___

### vaultFileVersionUuid

• **vaultFileVersionUuid**: `string` = `""`

The UUID of the version

--------------------------------------------------------

**`Generated`**

from field: string vault_file_version_uuid = 21;

#### Defined in

src/vault_commons.scailo_pb.ts:963

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_commons.scailo_pb.ts:979

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_commons.scailo_pb.ts:977

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GiXAppRunFilterReq"``

#### Defined in

src/vault_commons.scailo_pb.ts:978

## Methods

### clone

▸ **clone**(): [`GiXAppRunFilterReq`](GiXAppRunFilterReq.md)

Create a deep copy.

#### Returns

[`GiXAppRunFilterReq`](GiXAppRunFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GiXAppRunFilterReq`](GiXAppRunFilterReq.md) \| `PlainMessage`\<[`GiXAppRunFilterReq`](GiXAppRunFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GiXAppRunFilterReq`](GiXAppRunFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GiXAppRunFilterReq`](GiXAppRunFilterReq.md)\>

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
| `a` | `undefined` \| [`GiXAppRunFilterReq`](GiXAppRunFilterReq.md) \| `PlainMessage`\<[`GiXAppRunFilterReq`](GiXAppRunFilterReq.md)\> |
| `b` | `undefined` \| [`GiXAppRunFilterReq`](GiXAppRunFilterReq.md) \| `PlainMessage`\<[`GiXAppRunFilterReq`](GiXAppRunFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_commons.scailo_pb.ts:1004

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GiXAppRunFilterReq`](GiXAppRunFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GiXAppRunFilterReq`](GiXAppRunFilterReq.md)

#### Defined in

src/vault_commons.scailo_pb.ts:992

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GiXAppRunFilterReq`](GiXAppRunFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXAppRunFilterReq`](GiXAppRunFilterReq.md)

#### Defined in

src/vault_commons.scailo_pb.ts:996

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GiXAppRunFilterReq`](GiXAppRunFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXAppRunFilterReq`](GiXAppRunFilterReq.md)

#### Defined in

src/vault_commons.scailo_pb.ts:1000
