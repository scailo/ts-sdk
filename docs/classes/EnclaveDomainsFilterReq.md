[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveDomainsFilterReq

# Class: EnclaveDomainsFilterReq

Describes the request payload of a enclave domains filter search

**`Generated`**

from message Scailo.EnclaveDomainsFilterReq

## Hierarchy

- `Message`\<[`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md)\>

  ↳ **`EnclaveDomainsFilterReq`**

## Table of contents

### Constructors

- [constructor](EnclaveDomainsFilterReq.md#constructor)

### Properties

- [count](EnclaveDomainsFilterReq.md#count)
- [creationTimestampEnd](EnclaveDomainsFilterReq.md#creationtimestampend)
- [creationTimestampStart](EnclaveDomainsFilterReq.md#creationtimestampstart)
- [domain](EnclaveDomainsFilterReq.md#domain)
- [entityUuid](EnclaveDomainsFilterReq.md#entityuuid)
- [isActive](EnclaveDomainsFilterReq.md#isactive)
- [modificationTimestampEnd](EnclaveDomainsFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](EnclaveDomainsFilterReq.md#modificationtimestampstart)
- [offset](EnclaveDomainsFilterReq.md#offset)
- [serviceAddr](EnclaveDomainsFilterReq.md#serviceaddr)
- [sortKey](EnclaveDomainsFilterReq.md#sortkey)
- [sortOrder](EnclaveDomainsFilterReq.md#sortorder)
- [fields](EnclaveDomainsFilterReq.md#fields)
- [runtime](EnclaveDomainsFilterReq.md#runtime)
- [typeName](EnclaveDomainsFilterReq.md#typename)

### Methods

- [clone](EnclaveDomainsFilterReq.md#clone)
- [equals](EnclaveDomainsFilterReq.md#equals)
- [fromBinary](EnclaveDomainsFilterReq.md#frombinary)
- [fromJson](EnclaveDomainsFilterReq.md#fromjson)
- [fromJsonString](EnclaveDomainsFilterReq.md#fromjsonstring)
- [getType](EnclaveDomainsFilterReq.md#gettype)
- [toBinary](EnclaveDomainsFilterReq.md#tobinary)
- [toJSON](EnclaveDomainsFilterReq.md#tojson)
- [toJson](EnclaveDomainsFilterReq.md#tojson-1)
- [toJsonString](EnclaveDomainsFilterReq.md#tojsonstring)
- [equals](EnclaveDomainsFilterReq.md#equals-1)
- [fromBinary](EnclaveDomainsFilterReq.md#frombinary-1)
- [fromJson](EnclaveDomainsFilterReq.md#fromjson-1)
- [fromJsonString](EnclaveDomainsFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveDomainsFilterReq**(`data?`): [`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md)\> |

#### Returns

[`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md)

#### Overrides

Message\&lt;EnclaveDomainsFilterReq\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:2254](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2254)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/vault_commons.scailo_pb.ts:2182](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2182)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/vault_commons.scailo_pb.ts:2217](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2217)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/vault_commons.scailo_pb.ts:2210](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2210)

___

### domain

• **domain**: `string` = `""`

The domain that points to the enclave

**`Generated`**

from field: string domain = 11;

#### Defined in

[src/vault_commons.scailo_pb.ts:2245](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2245)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/vault_commons.scailo_pb.ts:2238](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2238)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:2175](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2175)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/vault_commons.scailo_pb.ts:2231](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2231)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/vault_commons.scailo_pb.ts:2224](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2224)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/vault_commons.scailo_pb.ts:2189](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2189)

___

### serviceAddr

• **serviceAddr**: `string` = `""`

The internal address of the service that the domain points to

**`Generated`**

from field: string service_addr = 12;

#### Defined in

[src/vault_commons.scailo_pb.ts:2252](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2252)

___

### sortKey

• **sortKey**: [`ENCLAVE_DOMAIN_SORT_KEY`](../enums/ENCLAVE_DOMAIN_SORT_KEY.md) = `ENCLAVE_DOMAIN_SORT_KEY.ENCLAVE_DOMAIN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ENCLAVE_DOMAIN_SORT_KEY sort_key = 5;

#### Defined in

[src/vault_commons.scailo_pb.ts:2203](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2203)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/vault_commons.scailo_pb.ts:2196](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2196)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:2261](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2261)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:2259](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2259)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveDomainsFilterReq"``

#### Defined in

[src/vault_commons.scailo_pb.ts:2260](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2260)

## Methods

### clone

▸ **clone**(): [`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md)

Create a deep copy.

#### Returns

[`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md) \| `PlainMessage`\<[`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md)\>

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
| `a` | `undefined` \| [`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md) \| `PlainMessage`\<[`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md)\> |
| `b` | `undefined` \| [`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md) \| `PlainMessage`\<[`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:2288](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2288)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2276](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2276)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2280](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2280)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveDomainsFilterReq`](EnclaveDomainsFilterReq.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2284](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/vault_commons.scailo_pb.ts#L2284)
