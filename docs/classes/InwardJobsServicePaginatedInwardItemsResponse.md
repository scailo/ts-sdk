[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsServicePaginatedInwardItemsResponse

# Class: InwardJobsServicePaginatedInwardItemsResponse

Describes the response to a pagination inward items request

**`Generated`**

from message Scailo.InwardJobsServicePaginatedInwardItemsResponse

## Hierarchy

- `Message`\<[`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md)\>

  ↳ **`InwardJobsServicePaginatedInwardItemsResponse`**

## Table of contents

### Constructors

- [constructor](InwardJobsServicePaginatedInwardItemsResponse.md#constructor)

### Properties

- [count](InwardJobsServicePaginatedInwardItemsResponse.md#count)
- [offset](InwardJobsServicePaginatedInwardItemsResponse.md#offset)
- [payload](InwardJobsServicePaginatedInwardItemsResponse.md#payload)
- [total](InwardJobsServicePaginatedInwardItemsResponse.md#total)
- [fields](InwardJobsServicePaginatedInwardItemsResponse.md#fields)
- [runtime](InwardJobsServicePaginatedInwardItemsResponse.md#runtime)
- [typeName](InwardJobsServicePaginatedInwardItemsResponse.md#typename)

### Methods

- [clone](InwardJobsServicePaginatedInwardItemsResponse.md#clone)
- [equals](InwardJobsServicePaginatedInwardItemsResponse.md#equals)
- [fromBinary](InwardJobsServicePaginatedInwardItemsResponse.md#frombinary)
- [fromJson](InwardJobsServicePaginatedInwardItemsResponse.md#fromjson)
- [fromJsonString](InwardJobsServicePaginatedInwardItemsResponse.md#fromjsonstring)
- [getType](InwardJobsServicePaginatedInwardItemsResponse.md#gettype)
- [toBinary](InwardJobsServicePaginatedInwardItemsResponse.md#tobinary)
- [toJSON](InwardJobsServicePaginatedInwardItemsResponse.md#tojson)
- [toJson](InwardJobsServicePaginatedInwardItemsResponse.md#tojson-1)
- [toJsonString](InwardJobsServicePaginatedInwardItemsResponse.md#tojsonstring)
- [equals](InwardJobsServicePaginatedInwardItemsResponse.md#equals-1)
- [fromBinary](InwardJobsServicePaginatedInwardItemsResponse.md#frombinary-1)
- [fromJson](InwardJobsServicePaginatedInwardItemsResponse.md#fromjson-1)
- [fromJsonString](InwardJobsServicePaginatedInwardItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsServicePaginatedInwardItemsResponse**(`data?`): [`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md)\> |

#### Returns

[`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md)

#### Overrides

Message\&lt;InwardJobsServicePaginatedInwardItemsResponse\&gt;.constructor

#### Defined in

[src/inward_jobs.scailo_pb.ts:3099](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L3099)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3069](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L3069)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3079](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L3079)

___

### payload

• **payload**: [`InwardJobInwardItem`](InwardJobInwardItem.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.InwardJobInwardItem payload = 4;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3097](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L3097)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3089](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L3089)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs.scailo_pb.ts:3106](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L3106)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs.scailo_pb.ts:3104](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L3104)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsServicePaginatedInwardItemsResponse"``

#### Defined in

[src/inward_jobs.scailo_pb.ts:3105](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L3105)

## Methods

### clone

▸ **clone**(): [`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md)

Create a deep copy.

#### Returns

[`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md) \| `PlainMessage`\<[`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md)\>

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
| `a` | `undefined` \| [`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md) \| `PlainMessage`\<[`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md)\> |
| `b` | `undefined` \| [`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md) \| `PlainMessage`\<[`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs.scailo_pb.ts:3125](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L3125)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:3113](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L3113)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:3117](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L3117)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServicePaginatedInwardItemsResponse`](InwardJobsServicePaginatedInwardItemsResponse.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:3121](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/inward_jobs.scailo_pb.ts#L3121)
