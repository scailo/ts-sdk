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

[src/vault_commons.scailo_pb.ts:2528](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2528)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/vault_commons.scailo_pb.ts:2394](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2394)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/vault_commons.scailo_pb.ts:2464](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2464)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/vault_commons.scailo_pb.ts:2448](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2448)

___

### domain

• **domain**: `string` = `""`

The domain that points to the enclave

**`Generated`**

from field: string domain = 11;

#### Defined in

[src/vault_commons.scailo_pb.ts:2519](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2519)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/vault_commons.scailo_pb.ts:2512](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2512)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:2378](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2378)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/vault_commons.scailo_pb.ts:2496](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2496)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/vault_commons.scailo_pb.ts:2480](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2480)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/vault_commons.scailo_pb.ts:2410](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2410)

___

### serviceAddr

• **serviceAddr**: `string` = `""`

The internal address of the service that the domain points to

**`Generated`**

from field: string service_addr = 12;

#### Defined in

[src/vault_commons.scailo_pb.ts:2526](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2526)

___

### sortKey

• **sortKey**: [`ENCLAVE_DOMAIN_SORT_KEY`](../enums/ENCLAVE_DOMAIN_SORT_KEY.md) = `ENCLAVE_DOMAIN_SORT_KEY.ENCLAVE_DOMAIN_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.ENCLAVE_DOMAIN_SORT_KEY sort_key = 5;

#### Defined in

[src/vault_commons.scailo_pb.ts:2432](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2432)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/vault_commons.scailo_pb.ts:2422](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2422)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:2535](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2535)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:2533](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2533)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveDomainsFilterReq"``

#### Defined in

[src/vault_commons.scailo_pb.ts:2534](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2534)

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

[src/vault_commons.scailo_pb.ts:2562](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2562)

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

[src/vault_commons.scailo_pb.ts:2550](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2550)

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

[src/vault_commons.scailo_pb.ts:2554](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2554)

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

[src/vault_commons.scailo_pb.ts:2558](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vault_commons.scailo_pb.ts#L2558)
