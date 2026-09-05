[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsServicePaginatedRecordsResponse

# Class: LeavesAdjustmentsServicePaginatedRecordsResponse

Describes the response to a pagination records request

**`Generated`**

from message Scailo.LeavesAdjustmentsServicePaginatedRecordsResponse

## Hierarchy

- `Message`\<[`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md)\>

  ↳ **`LeavesAdjustmentsServicePaginatedRecordsResponse`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsServicePaginatedRecordsResponse.md#constructor)

### Properties

- [count](LeavesAdjustmentsServicePaginatedRecordsResponse.md#count)
- [offset](LeavesAdjustmentsServicePaginatedRecordsResponse.md#offset)
- [payload](LeavesAdjustmentsServicePaginatedRecordsResponse.md#payload)
- [total](LeavesAdjustmentsServicePaginatedRecordsResponse.md#total)
- [fields](LeavesAdjustmentsServicePaginatedRecordsResponse.md#fields)
- [runtime](LeavesAdjustmentsServicePaginatedRecordsResponse.md#runtime)
- [typeName](LeavesAdjustmentsServicePaginatedRecordsResponse.md#typename)

### Methods

- [clone](LeavesAdjustmentsServicePaginatedRecordsResponse.md#clone)
- [equals](LeavesAdjustmentsServicePaginatedRecordsResponse.md#equals)
- [fromBinary](LeavesAdjustmentsServicePaginatedRecordsResponse.md#frombinary)
- [fromJson](LeavesAdjustmentsServicePaginatedRecordsResponse.md#fromjson)
- [fromJsonString](LeavesAdjustmentsServicePaginatedRecordsResponse.md#fromjsonstring)
- [getType](LeavesAdjustmentsServicePaginatedRecordsResponse.md#gettype)
- [toBinary](LeavesAdjustmentsServicePaginatedRecordsResponse.md#tobinary)
- [toJSON](LeavesAdjustmentsServicePaginatedRecordsResponse.md#tojson)
- [toJson](LeavesAdjustmentsServicePaginatedRecordsResponse.md#tojson-1)
- [toJsonString](LeavesAdjustmentsServicePaginatedRecordsResponse.md#tojsonstring)
- [equals](LeavesAdjustmentsServicePaginatedRecordsResponse.md#equals-1)
- [fromBinary](LeavesAdjustmentsServicePaginatedRecordsResponse.md#frombinary-1)
- [fromJson](LeavesAdjustmentsServicePaginatedRecordsResponse.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsServicePaginatedRecordsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsServicePaginatedRecordsResponse**(`data?`): [`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md)\> |

#### Returns

[`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md)

#### Overrides

Message\&lt;LeavesAdjustmentsServicePaginatedRecordsResponse\&gt;.constructor

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2255](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2255)

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

[src/leaves_adjustments.scailo_pb.ts:2225](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2225)

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

[src/leaves_adjustments.scailo_pb.ts:2235](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2235)

___

### payload

• **payload**: [`LeaveAdjustmentRecord`](LeaveAdjustmentRecord.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.LeaveAdjustmentRecord payload = 4;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2253](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2253)

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

[src/leaves_adjustments.scailo_pb.ts:2245](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2245)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2262](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2262)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2260](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2260)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesAdjustmentsServicePaginatedRecordsResponse"``

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2261](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2261)

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md) \| `PlainMessage`\<[`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md) \| `PlainMessage`\<[`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md) \| `PlainMessage`\<[`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2281](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2281)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2269](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2269)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2273](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2273)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServicePaginatedRecordsResponse`](LeavesAdjustmentsServicePaginatedRecordsResponse.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:2277](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L2277)
