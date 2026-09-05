[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Store

# Class: Store

Represents a full Store within the system.

**`Generated`**

from message Scailo.Store

## Hierarchy

- `Message`\<[`Store`](Store.md)\>

  ↳ **`Store`**

## Table of contents

### Constructors

- [constructor](Store.md#constructor)

### Properties

- [approvalMetadata](Store.md#approvalmetadata)
- [code](Store.md#code)
- [description](Store.md#description)
- [entityUuid](Store.md#entityuuid)
- [inchargeUsername](Store.md#inchargeusername)
- [locationId](Store.md#locationid)
- [logs](Store.md#logs)
- [metadata](Store.md#metadata)
- [name](Store.md#name)
- [phone](Store.md#phone)
- [status](Store.md#status)
- [fields](Store.md#fields)
- [runtime](Store.md#runtime)
- [typeName](Store.md#typename)

### Methods

- [clone](Store.md#clone)
- [equals](Store.md#equals)
- [fromBinary](Store.md#frombinary)
- [fromJson](Store.md#fromjson)
- [fromJsonString](Store.md#fromjsonstring)
- [getType](Store.md#gettype)
- [toBinary](Store.md#tobinary)
- [toJSON](Store.md#tojson)
- [toJson](Store.md#tojson-1)
- [toJsonString](Store.md#tojsonstring)
- [equals](Store.md#equals-1)
- [fromBinary](Store.md#frombinary-1)
- [fromJson](Store.md#fromjson-1)
- [fromJsonString](Store.md#fromjsonstring-1)

## Constructors

### constructor

• **new Store**(`data?`): [`Store`](Store.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Store`](Store.md)\> |

#### Returns

[`Store`](Store.md)

#### Overrides

Message\&lt;Store\&gt;.constructor

#### Defined in

[src/stores.scailo_pb.ts:541](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L541)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/stores.scailo_pb.ts:463](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L463)

___

### code

• **code**: `string` = `""`

**`Description`**

The unique code or internal alphanumeric token used to classify the store facility for accounting, delivery, or inventory mapping.

**`Example`**

```ts
"STR-DT-01"
```

**`Generated`**

from field: string code = 11;

#### Defined in

[src/stores.scailo_pb.ts:509](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L509)

___

### description

• **description**: `string` = `""`

**`Description`**

Clarifying details or operational parameters regarding the store layout, capacity thresholds, or hours of operation.

**`Example`**

```ts
"Primary retail outlet serving the metropolitan area. Includes standard fulfillment capabilities."
```

**`Generated`**

from field: string description = 12;

#### Defined in

[src/stores.scailo_pb.ts:519](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L519)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/stores.scailo_pb.ts:447](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L447)

___

### inchargeUsername

• **inchargeUsername**: `string` = `""`

**`Description`**

The unique system username or account identifier of the person-in-charge or facility manager responsible for this store.

**`Example`**

```ts
"johndoe_mgr"
```

**`Generated`**

from field: string incharge_username = 13;

#### Defined in

[src/stores.scailo_pb.ts:529](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L529)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the geographic or logical location under which this store is situated.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 location_id = 9;

#### Defined in

[src/stores.scailo_pb.ts:489](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L489)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/stores.scailo_pb.ts:479](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L479)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/stores.scailo_pb.ts:455](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L455)

___

### name

• **name**: `string` = `""`

**`Description`**

The official, friendly, or legal branding name of the store facility.

**`Example`**

```ts
"Downtown Flagship Store"
```

**`Generated`**

from field: string name = 10;

#### Defined in

[src/stores.scailo_pb.ts:499](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L499)

___

### phone

• **phone**: `string` = `""`

**`Description`**

The primary telephone or hot-line contact number explicitly assigned to the store facility.

**`Example`**

```ts
"+1-555-0177"
```

**`Generated`**

from field: string phone = 14;

#### Defined in

[src/stores.scailo_pb.ts:539](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L539)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/stores.scailo_pb.ts:471](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L471)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stores.scailo_pb.ts:548](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L548)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stores.scailo_pb.ts:546](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L546)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Store"``

#### Defined in

[src/stores.scailo_pb.ts:547](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L547)

## Methods

### clone

▸ **clone**(): [`Store`](Store.md)

Create a deep copy.

#### Returns

[`Store`](Store.md)

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
| `other` | `undefined` \| ``null`` \| [`Store`](Store.md) \| `PlainMessage`\<[`Store`](Store.md)\> |

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

▸ **getType**(): `MessageType`\<[`Store`](Store.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Store`](Store.md)\>

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
| `a` | `undefined` \| [`Store`](Store.md) \| `PlainMessage`\<[`Store`](Store.md)\> |
| `b` | `undefined` \| [`Store`](Store.md) \| `PlainMessage`\<[`Store`](Store.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stores.scailo_pb.ts:574](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L574)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Store`](Store.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Store`](Store.md)

#### Defined in

[src/stores.scailo_pb.ts:562](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L562)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Store`](Store.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Store`](Store.md)

#### Defined in

[src/stores.scailo_pb.ts:566](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L566)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Store`](Store.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Store`](Store.md)

#### Defined in

[src/stores.scailo_pb.ts:570](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L570)
